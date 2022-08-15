import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Page } from 'src/page/page.model';
import { ProjectUser } from 'src/projectuser/projectuser.model';
import { User } from 'src/user/user.model';

@Table
export class Project extends Model {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  createdBy: number;

  @Column
  visibility: string;

  @Column
  description: string;

  @HasMany(() => Page)
  pages: Page[];

  @HasMany(() => ProjectUser)
  projectUsers: ProjectUser[];
}
