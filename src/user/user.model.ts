import { Table, Column, Model, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Unique(true)
  @Column
  email: string;

  @Column
  password: string;
}
