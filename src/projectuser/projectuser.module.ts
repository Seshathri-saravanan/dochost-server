import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectuserController } from './projectuser.controller';
import { ProjectUser } from './projectuser.model';
import { ProjectuserService } from './projectuser.service';

@Module({
  imports: [SequelizeModule.forFeature([ProjectUser])],
  controllers: [ProjectuserController],
  providers: [ProjectuserService],
  exports: [ProjectuserService],
})
export class ProjectuserModule {}
