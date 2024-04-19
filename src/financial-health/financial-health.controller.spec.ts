import { Test, TestingModule } from '@nestjs/testing';
import { FinancialHealthController } from './financial-health.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { FinancialHealthService } from './financial-health.service';

describe('FinancialHealthController', () => {
  let controller: FinancialHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [FinancialHealthController],
      providers: [ConfigService, FinancialHealthService]
    }).compile();

    controller = module.get<FinancialHealthController>(FinancialHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
