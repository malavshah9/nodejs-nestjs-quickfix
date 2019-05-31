import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseConnectionController } from './database-connection.controller';

describe('DatabaseConnection Controller', () => {
  let controller: DatabaseConnectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseConnectionController],
    }).compile();

    controller = module.get<DatabaseConnectionController>(DatabaseConnectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
