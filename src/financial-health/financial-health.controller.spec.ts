import { Test, TestingModule } from '@nestjs/testing';
import { FinancialHealthController } from './financial-health.controller';

describe('FinancialHealthController', () => {
  let controller: FinancialHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialHealthController],
    }).compile();

    controller = module.get<FinancialHealthController>(FinancialHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
