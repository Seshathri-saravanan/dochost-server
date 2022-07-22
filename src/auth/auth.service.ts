import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return { userId: user.id, email: user.email };
    }
    return null;
  }

  async login(user: any) {
    const userObj = await this.validateUser(user.email, user.password);
    if (!userObj) throw new UnauthorizedException();
    console.log(userObj);

    return {
      access_token: this.jwtService.sign(userObj),
    };
  }
}
