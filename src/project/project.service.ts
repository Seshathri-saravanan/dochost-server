import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Page } from 'src/page/page.model';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
  ) {}

  async getProjectById(id: number) {
    return this.projectModel.findOne({
      where: {
        id,
      },
      include: [Page],
    });
  }

  async createProject(projectData: any) {
    return this.projectModel.create(projectData);
  }

  async getAllProjects(createdById: number) {
    return this.projectModel.findAll({
      where: {
        createdBy: createdById,
      },
    });
  }
}
