import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/user.model';

@Table
export class UserProfile extends Model {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: string;
}
