import { Get, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNotificationEvent } from 'src/common/types';
import { UserprofileService } from 'src/userprofile/userprofile.service';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private notificationModel: typeof Notification,
    private userProfileService: UserprofileService,
  ) {}
  @OnEvent('create.notification')
  handleOrderCreate(payload: CreateNotificationEvent) {
    payload.receivers.map(async (userId: number) => {
      const userprofile = await this.userProfileService.getUserProfile(
        String(userId),
      );
      this.notificationModel.create({
        name: payload.name,
        description: payload.description.replace('#####', userprofile.name),
        userId,
      });
    });
  }

  async getall(userId: number) {
    return this.notificationModel.findAll({ where: { userId } });
  }
}
