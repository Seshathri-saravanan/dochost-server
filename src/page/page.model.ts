import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Project } from 'src/project/project.model';

@Table
export class Page extends Model {
  @Column
  name: string;

  @Column
  content: string;

  @ForeignKey(() => Project)
  @Column
  projectId: string;

  @Column
  isPublished: boolean;
}
