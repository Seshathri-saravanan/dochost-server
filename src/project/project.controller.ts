import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  Request,
} from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getallprojects(@Request() req) {
    return this.projectService.getAllProjects(req.user.userId);
  }

  @Put('/:id')
  updateProject() {}

  @Post()
  createProject(@Request() req, @Body() project) {
    return this.projectService.createProject({
      ...project,
      createdBy: req.user.userId,
    });
  }

  @Get('/:id')
  getProjectDetails(@Request() req, @Param() params) {
    console.log('in id', params);
    return this.projectService.getProjectById(params.id);
  }
}
