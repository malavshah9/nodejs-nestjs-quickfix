import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseServiceService } from './database-service.service';

describe('DatabaseServiceService', () => {
  let service: DatabaseServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseServiceService],
    }).compile();

    service = module.get<DatabaseServiceService>(DatabaseServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
