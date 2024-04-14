import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsCtrlController } from './transactions-ctrl.controller';

describe('TransactionsCtrlController', () => {
  let controller: TransactionsCtrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsCtrlController],
    }).compile();

    controller = module.get<TransactionsCtrlController>(TransactionsCtrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
