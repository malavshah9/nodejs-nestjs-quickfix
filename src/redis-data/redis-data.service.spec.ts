import { Test, TestingModule } from '@nestjs/testing';
import { RedisDataService } from './redis-data.service';

describe('RedisDataService', () => {
  let service: RedisDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisDataService],
    }).compile();

    service = module.get<RedisDataService>(RedisDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
