import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(private pageService: PageService) {}
  @Get()
  async getAllPages(@Body() pageData) {
    return this.pageService.getallpages(pageData.projectId);
  }

  @Post()
  async createPage(@Body() payload) {
    return this.pageService.createPage(payload.projectId, payload.pageName);
  }

  @Put('/:id')
  async updatePage(@Body() payload, @Param() params) {
    return this.pageService.updatePage(params.id, payload);
  }
}
