import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsFetcherService } from './transactions-fetcher.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

describe('TransactionsFetcherService', () => {
  let service: TransactionsFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ConfigService, TransactionsFetcherService],
    }).compile();

    service = module.get<TransactionsFetcherService>(TransactionsFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
