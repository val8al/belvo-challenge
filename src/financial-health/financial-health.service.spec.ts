import { Test, TestingModule } from '@nestjs/testing';
import { FinancialHealthService } from './financial-health.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('FinancialHealthService', () => {
  let service: FinancialHealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [FinancialHealthService, ConfigService],
    }).compile();

    service = module.get<FinancialHealthService>(FinancialHealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
