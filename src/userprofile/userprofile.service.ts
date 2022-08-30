import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNotificationEvent } from 'src/common/types';
import { UserProfile } from './userprofile.model';

@Injectable()
export class UserprofileService {
  constructor(
    @InjectModel(UserProfile)
    private userProfileModel: typeof UserProfile,
    private eventEmitter: EventEmitter2,
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
    this.eventEmitter.emit('create.notification', {
      name: 'user Profile updated',
      description: `User Profile update by you on ${new Date()}`,
      receivers: [+userId],
    } as CreateNotificationEvent);
    return await this.userProfileModel.update(
      { ...payload },
      { where: { userId } },
    );
  }
}
