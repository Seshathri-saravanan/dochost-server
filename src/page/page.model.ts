import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Project } from 'src/project/project.model';
import { DataTypes } from 'sequelize';
@Table
export class Page extends Model {
  @Column
  name: string;

  @Column({ type: DataTypes.TEXT })
  content: typeof DataTypes.TEXT;

  @ForeignKey(() => Project)
  @Column
  projectId: number;

  @Column
  isPublished: boolean;
}
