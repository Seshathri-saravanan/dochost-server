import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from 'src/user/user.model';
@Table
export class Notification extends Model {
  @Column
  name: string;

  @Column({ type: DataTypes.TEXT })
  description: typeof DataTypes.TEXT;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column({ defaultValue: false })
  seen: boolean;
}
