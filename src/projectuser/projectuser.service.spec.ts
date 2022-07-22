import { Test, TestingModule } from '@nestjs/testing';
import { ProjectuserService } from './projectuser.service';

describe('ProjectuserService', () => {
  let service: ProjectuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectuserService],
    }).compile();

    service = module.get<ProjectuserService>(ProjectuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
