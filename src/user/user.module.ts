import { forwardRef, Inject, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Page } from 'src/page/page.model';
import { Project } from 'src/project/project.model';
import { ProjectUser } from 'src/projectuser/projectuser.model';
import { UserProfile } from 'src/userprofile/userprofile.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserProfile, ProjectUser, Project, Page]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
