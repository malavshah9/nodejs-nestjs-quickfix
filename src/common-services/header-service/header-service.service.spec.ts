import { Test, TestingModule } from '@nestjs/testing';
import { HeaderServiceService } from './header-service.service';

describe('HeaderServiceService', () => {
  let service: HeaderServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeaderServiceService],
    }).compile();

    service = module.get<HeaderServiceService>(HeaderServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
