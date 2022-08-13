import { Body, Controller, Get, Post, Put, Request } from '@nestjs/common';
import { UserprofileService } from './userprofile.service';

@Controller('userprofile')
export class UserprofileController {
  constructor(private userProfileService: UserprofileService) {}

  @Get()
  getuserprofile(@Request() req) {
    return this.userProfileService.getUserProfile(req.user.userId);
  }

  @Post()
  updateuserprofile(@Request() req, @Body() payload) {
    return this.userProfileService.updateUserProfile(req.user.userId, payload);
  }

}
