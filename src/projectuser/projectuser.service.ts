import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { ProjectUser } from './projectuser.model';

@Injectable()
export class ProjectuserService {
  constructor(
    @InjectModel(ProjectUser) private projectUserModel: typeof ProjectUser,
    @InjectModel(User) private userModel: typeof User,
  ) {}

  async getUserIdFromEmail(email: string): Promise<number> {
    return (await this.userModel.findOne({ where: { email } }))?.id;
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
    console.log('updating project user:', userId, projectId);
    let puser = null;
    try {
      puser = await this.projectUserModel.findOne({
        where: { userId, projectId },
      });
    } catch (e) {
      console.log('errpr caught', e);
    }
    console.log('updating project user:', puser);
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
