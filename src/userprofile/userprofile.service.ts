import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserProfile } from './userprofile.model';

@Injectable()
export class UserprofileService {
  constructor(
    @InjectModel(UserProfile)
    private userProfileModel: typeof UserProfile,
  ) {}

  async createUserProfile(
    userId: string,
    userProfile: { name: string; email: string },
  ) {
    return await this.userProfileModel.create({ userId, ...userProfile });
  }

  async getUserProfile(userId: string) {
    return await this.userProfileModel.findOne({ where: { userId } });
  }

  async updateUserProfile(userId: string, payload: any) {
    return await this.userProfileModel.update(
      { ...payload },
      { where: { userId } },
    );
  }
}
