import { Test, TestingModule } from '@nestjs/testing';
import { TcrServiceService } from './tcr-service.service';

describe('TcrServiceService', () => {
  let service: TcrServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TcrServiceService],
    }).compile();

    service = module.get<TcrServiceService>(TcrServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
