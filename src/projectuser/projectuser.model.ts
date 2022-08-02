import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Project } from 'src/project/project.model';
import { User } from 'src/user/user.model';

@Table
export class ProjectUser extends Model {
  @ForeignKey(() => User)
  @Column
  userId: string;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @Column
  role: string;
}
