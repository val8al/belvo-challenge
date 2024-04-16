import { Test, TestingModule } from '@nestjs/testing';
import { AccountsOverviewController } from './accounts-overview.controller';

describe('AccountsOverviewController', () => {
  let controller: AccountsOverviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsOverviewController],
    }).compile();

    controller = module.get<AccountsOverviewController>(AccountsOverviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
