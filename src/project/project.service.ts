import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Page } from 'src/page/page.model';
import { ProjectUser } from 'src/projectuser/projectuser.model';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
    @InjectModel(ProjectUser)
    private projectUserModel: typeof ProjectUser,
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

  async updateProject(id: number, projectData: any) {
    return this.projectModel.update(projectData, { where: { id } });
  }

  async getUserProjects(createdById: number) {
    return this.projectModel.findAll({
      where: {
        createdBy: createdById,
      },
    });
  }

  async getSharedProjects(userId: number) {
    return this.projectUserModel.findAll({
      where: {
        userId,
      },
      include: [Project],
    });
  }
}
