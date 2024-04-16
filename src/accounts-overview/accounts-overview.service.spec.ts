import { Test, TestingModule } from '@nestjs/testing';
import { AccountsOverviewService } from './accounts-overview.service';

describe('AccountsOverviewService', () => {
  let service: AccountsOverviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsOverviewService],
    }).compile();

    service = module.get<AccountsOverviewService>(AccountsOverviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
