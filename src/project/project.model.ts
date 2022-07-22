import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/user.model';

@Table
export class Project extends Model {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  createdBy: string;

  @Column
  visibility: string;
}
