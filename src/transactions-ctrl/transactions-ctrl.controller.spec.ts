import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsCtrlController } from './transactions-ctrl.controller';
import { TransactionsFetcherService } from '../transactions-fetcher/transactions-fetcher.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('TransactionsCtrlController', () => {
  let controller: TransactionsCtrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TransactionsCtrlController],
      providers: [TransactionsFetcherService, ConfigService]
    }).compile();

    controller = module.get<TransactionsCtrlController>(TransactionsCtrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
