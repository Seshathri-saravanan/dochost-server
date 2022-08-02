import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authconstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './public-auth-guard';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: authconstants.jwtsecret,
      signOptions: { expiresIn: '360000s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
