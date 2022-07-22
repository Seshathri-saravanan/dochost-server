import { Test, TestingModule } from '@nestjs/testing';
import { ProjectuserController } from './projectuser.controller';

describe('ProjectuserController', () => {
  let controller: ProjectuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectuserController],
    }).compile();

    controller = module.get<ProjectuserController>(ProjectuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
