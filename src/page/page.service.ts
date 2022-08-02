import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Page } from './page.model';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page)
    private pageModel: typeof Page,
  ) {}
  async getallpages(projectId: number) {
    return this.pageModel.findAll({
      where: {
        projectId,
      },
    });
  }

  async createPage(projectId: number, pageName: string) {
    return this.pageModel.create({
      content:
        '[{"type":"paragraph","align":"center","children":[{"text":"Get started here by typing here!"}]}]',
      projectId,
      name: pageName,
    });
  }

  async updatePage(pageId: number, payload: any) {
    console.log(pageId, payload);
    return this.pageModel.update(payload, {
      where: {
        id: pageId,
      },
    });
  }
}
