import { Controller, forwardRef, Get, Inject } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  hello() {
    return this.userService.createall();
  }
}
