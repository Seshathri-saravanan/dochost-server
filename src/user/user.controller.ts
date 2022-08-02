import { Controller, forwardRef, Get, Inject } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from 'src/auth/auth.service';
import { Public } from 'src/auth/public-auth-guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Public()
  @Get()
  hello() {
    return this.userService.createall();
  }
}
