import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserprofileModule } from 'src/userprofile/userprofile.module';
import { UserprofileService } from 'src/userprofile/userprofile.service';
import { NotificationController } from './notification.controller';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';

@Module({
  imports: [SequelizeModule.forFeature([Notification]), UserprofileModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
