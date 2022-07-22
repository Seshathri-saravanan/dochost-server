import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './auth/public-auth-guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(@Request() req): string {
    return req.user;
  }

  @Public()
  @Get('login')
  login(@Body() payload: { email: string; password: string }) {
    return this.authService.login({ ...payload });
  }
}
