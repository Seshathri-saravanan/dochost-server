import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserprofileService } from 'src/userprofile/userprofile.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private userProfileService: UserprofileService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      const userprofile = await this.userProfileService.getUserProfile(user.id);
      return { userId: user.id, email: user.email, userprofile };
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

  async signup(user: any) {
    const userObj = await this.usersService.create({
      email: user.email,
      password: user.password,
    });
    await this.userProfileService.createUserProfile(userObj.id, {
      name: user.name,
      email: user.email,
    });
    return this.login(userObj);
  }
}
