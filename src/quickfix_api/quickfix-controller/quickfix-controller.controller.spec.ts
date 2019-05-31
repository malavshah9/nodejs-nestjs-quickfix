import { Test, TestingModule } from '@nestjs/testing';
import { QuickfixControllerController } from './quickfix-controller.controller';

describe('QuickfixController Controller', () => {
  let controller: QuickfixControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuickfixControllerController],
    }).compile();

    controller = module.get<QuickfixControllerController>(QuickfixControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
