import { Test, TestingModule } from '@nestjs/testing';
import { MemoryMapService } from './memory-map.service';

describe('MemoryMapService', () => {
  let service: MemoryMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryMapService],
    }).compile();

    service = module.get<MemoryMapService>(MemoryMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
