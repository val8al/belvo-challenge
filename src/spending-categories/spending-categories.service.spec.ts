import { Test, TestingModule } from '@nestjs/testing';
import { SpendingCategoriesService } from './spending-categories.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('SpendingCategoriesService', () => {
  let service: SpendingCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [SpendingCategoriesService, ConfigService],
    }).compile();

    service = module.get<SpendingCategoriesService>(SpendingCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
