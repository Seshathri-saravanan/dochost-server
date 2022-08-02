import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectController } from './project.controller';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Module({
  imports: [SequelizeModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
