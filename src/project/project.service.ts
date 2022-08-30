import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNotificationEvent } from 'src/common/types';
import { Page } from 'src/page/page.model';
import { ProjectUser } from 'src/projectuser/projectuser.model';
import { UserProfile } from 'src/userprofile/userprofile.model';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project)
    private projectModel: typeof Project,
    @InjectModel(ProjectUser)
    private projectUserModel: typeof ProjectUser,
    private eventEmitter: EventEmitter2,
  ) {}

  async getProjectById(id: number) {
    return this.projectModel.findOne({
      where: {
        id,
      },
      include: [Page],
    });
  }

  async createProject(projectData: any, userId: number) {
    this.eventEmitter.emit('create.notification', {
      name: 'New Project created',
      description: `New project ${
        projectData.name
      } was created by ##### on ${new Date()}`,
      receivers: [userId],
    } as CreateNotificationEvent);

    return this.projectModel.create(projectData);
  }

  async updateProject(id: number, projectData: any, userId: number) {
    this.eventEmitter.emit('create.notification', {
      name: 'Project updated',
      description: `Project ${
        projectData.name
      } was updated by ##### on ${new Date()}`,
      receivers: [userId],
    } as CreateNotificationEvent);
    return this.projectModel.update(projectData, { where: { id } });
  }

  async getUserProjects(createdById: number) {
    return this.projectModel.findAll({
      where: {
        createdBy: createdById,
      },
      include: [ProjectUser],
    });
  }

  async getSharedProjects(userId: number) {
    const projectUsers = await this.projectUserModel.findAll({
      where: {
        userId,
      },
    });
    const projects = [];
    for (let puser of projectUsers) {
      const project = await this.getProjectById(puser.projectId);
      projects.push(project);
    }
    return projects;
  }
}
