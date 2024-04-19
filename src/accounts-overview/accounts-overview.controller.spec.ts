import { Test, TestingModule } from '@nestjs/testing';
import { AccountsOverviewController } from './accounts-overview.controller';
import { AccountsOverviewService } from './accounts-overview.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('AccountsOverviewController', () => {
  let controller: AccountsOverviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ConfigService, AccountsOverviewService],
      controllers: [AccountsOverviewController],
    }).compile();

    controller = module.get<AccountsOverviewController>(AccountsOverviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
