import { Test, TestingModule } from '@nestjs/testing';
import { SpendingCategoriesController } from './spending-categories.controller';
import { SpendingCategoriesService } from './spending-categories.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

describe('SpendingCategoriesController', () => {
  let controller: SpendingCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ConfigService, SpendingCategoriesService],
      controllers: [SpendingCategoriesController],
    }).compile();

    controller = module.get<SpendingCategoriesController>(SpendingCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
