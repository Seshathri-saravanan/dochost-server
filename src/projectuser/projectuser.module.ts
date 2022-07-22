import { Module } from '@nestjs/common';
import { ProjectuserController } from './projectuser.controller';
import { ProjectuserService } from './projectuser.service';

@Module({
  controllers: [ProjectuserController],
  providers: [ProjectuserService]
})
export class ProjectuserModule {}
