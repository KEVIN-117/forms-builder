import { Test, TestingModule } from '@nestjs/testing';
import { FormsServiceService } from './forms-service.service';

describe('FormsServiceService', () => {
  let service: FormsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormsServiceService],
    }).compile();

    service = module.get<FormsServiceService>(FormsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
