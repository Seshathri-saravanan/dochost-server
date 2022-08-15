import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { ProjectuserController } from './projectuser.controller';
import { ProjectUser } from './projectuser.model';
import { ProjectuserService } from './projectuser.service';

@Module({
  imports: [SequelizeModule.forFeature([ProjectUser, User])],
  controllers: [ProjectuserController],
  providers: [ProjectuserService],
  exports: [ProjectuserService],
})
export class ProjectuserModule {}
