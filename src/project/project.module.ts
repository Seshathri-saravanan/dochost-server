import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectUser } from 'src/projectuser/projectuser.model';
import { ProjectuserModule } from 'src/projectuser/projectuser.module';
import { ProjectuserService } from 'src/projectuser/projectuser.service';
import { ProjectController } from './project.controller';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Project, ProjectUser]),
    ProjectuserModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
