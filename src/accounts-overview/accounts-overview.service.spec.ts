import { Test, TestingModule } from '@nestjs/testing';
import { AccountsOverviewService } from './accounts-overview.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('AccountsOverviewService', () => {
  let service: AccountsOverviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ConfigService, AccountsOverviewService],
    }).compile();

    service = module.get<AccountsOverviewService>(AccountsOverviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
