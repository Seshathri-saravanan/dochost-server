import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Page } from 'src/page/page.model';
import { Project } from 'src/project/project.model';
import { ProjectUser } from 'src/projectuser/projectuser.model';
import { UserProfile } from 'src/userprofile/userprofile.model';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(UserProfile)
    private userProfileModel: typeof UserProfile,
    @InjectModel(Project)
    private projectModel: typeof Project,
    @InjectModel(ProjectUser)
    private projectUserModel: typeof ProjectUser,
    @InjectModel(Page)
    private pageModel: typeof Page,
  ) {}

  async create(user: any) {
    return this.userModel.create(user);
  }

  async createall() {
    const user = await this.userModel.create({
      email: 'seshathri',
      password: 'seshathri',
    });
    const userProfile = await this.userProfileModel.create({
      userId: user.id,
      name: 'seshathri',
    });
    const project = await this.projectModel.create({
      createdBy: user.id,
      name: 'p-1',
      visibility: 'none',
      description: 'This is a description',
    });
    const page = await this.pageModel.create({
      projectId: project.id,
      name: 'page-1',
      isPublished: false,
      content: JSON.stringify([
        {
          type: 'paragraph',
          align: 'center',
          children: [{ text: 'Get started by typing here!' }],
        },
      ]),
    });
    const projectuser = await this.projectUserModel.create({
      userId: user.id,
      projectId: project.id,
      role: 'admin',
    });
    return { user, userProfile, project, page, projectuser };
  }

  async findOne(email: string) {
    const user = await this.userModel.findOne({ where: { email } });
    console.log(user instanceof User);
    return user;
  }
}
