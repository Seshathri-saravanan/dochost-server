import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PageController } from './page.controller';
import { Page } from './page.model';
import { PageService } from './page.service';

@Module({
  imports: [SequelizeModule.forFeature([Page])],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
