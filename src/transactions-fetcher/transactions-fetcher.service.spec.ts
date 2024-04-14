import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsFetcherService } from './transactions-fetcher.service';

describe('TransactionsFetcherService', () => {
  let service: TransactionsFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsFetcherService],
    }).compile();

    service = module.get<TransactionsFetcherService>(TransactionsFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
