import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
// ["name", "college", "rollno", "email", "mobileNo"];
@Table
export class UserProfile extends Model {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  organisation: string;

  @Column
  email: string;

  @Column
  mobileno: string;

  @Column
  country: string;
}
