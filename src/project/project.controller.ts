import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Request,
} from '@nestjs/common';
import { ProjectuserService } from 'src/projectuser/projectuser.service';
import { ProjectService } from './project.service';
import { omit } from 'lodash';
@Controller('project')
export class ProjectController {
  constructor(
    private projectService: ProjectService,
    private projectuserService: ProjectuserService,
  ) {}

  @Get()
  getallprojects(@Request() req) {
    return this.projectService.getUserProjects(req.user.userId);
  }

  @Get('/shared')
  async getSharedProjects(@Request() req) {
    return this.projectService.getSharedProjects(req.user.userId);
  }

  @Put('/:id')
  updateProject(@Request() req, @Body() project, @Param() params) {
    const projectId = params.id;
    console.log('update:::', project, projectId);
    if (project.visibility === 'PRIVATE')
      this.projectuserService.updateProjectUsers(
        projectId,
        project.userEmailList,
      );
    else this.projectuserService.deleteProjectUsers(projectId);
    return this.projectService.updateProject(
      projectId,
      {
        ...omit(project, 'userEmailList'),
        createdBy: req.user.userId,
      },
      req.user.userId,
    );
  }

  @Post()
  createProject(@Request() req, @Body() project) {
    console.log('req', req.user);
    return this.projectService.createProject(
      {
        ...omit(project, 'userEmailList'),
        createdBy: req.user.userId,
      },
      req.user.userId,
    );
  }

  @Delete('/:id')
  deleteProject(@Request() req, @Param() params) {
    console.log('in delete', params);
    return this.projectService.deleteProject(params.id, req.user.userId);
  }

  @Get('/:id')
  getProjectDetails(@Request() req, @Param() params) {
    console.log('in id', params);
    return this.projectService.getProjectById(params.id);
  }
}
