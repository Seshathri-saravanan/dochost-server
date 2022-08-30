import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}
  @Get()
  async getnotifications(@Req() req) {
    return this.notificationService.getall(req.user.userId);
  }
}
