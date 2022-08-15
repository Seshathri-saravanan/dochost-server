import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserprofileController } from './userprofile.controller';
import { UserProfile } from './userprofile.model';
import { UserprofileService } from './userprofile.service';

@Module({
  imports: [SequelizeModule.forFeature([UserProfile])],
  controllers: [UserprofileController],
  providers: [UserprofileService],
  exports: [UserprofileService],
})
export class UserprofileModule {}
