import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProjectUser } from './projectuser.model';

@Injectable()
export class ProjectuserService {
  constructor(
    @InjectModel(ProjectUser) private projectUserModel: typeof ProjectUser,
  ) {}

  async getUserIdFromEmail(email: string): Promise<number> {
    return 1;
  }

  async updateProjectUsers(projectId: number, userEmailList: object) {
    this.deleteProjectUsers(projectId);
    Object.keys(userEmailList).map(async (email) => {
      this.updateProjectUser(
        await this.getUserIdFromEmail(email),
        projectId,
        userEmailList[email],
      );
    });
  }

  async updateProjectUser(userId: number, projectId: number, access: string) {
    const puser = await this.projectUserModel.findOne({
      where: { userId, projectId },
    });
    if (puser) {
      this.projectUserModel.update(
        { access },
        { where: { userId, projectId } },
      );
    } else {
      this.projectUserModel.create({ userId, projectId, access });
    }
  }

  async deleteProjectUser(userId: number, projectId: number) {
    this.projectUserModel.destroy({ where: { userId, projectId } });
  }

  async deleteProjectUsers(projectId: number) {
    this.projectUserModel.destroy({ where: { projectId } });
  }
}
