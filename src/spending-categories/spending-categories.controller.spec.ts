import { Test, TestingModule } from '@nestjs/testing';
import { SpendingCategoriesController } from './spending-categories.controller';

describe('SpendingCategoriesController', () => {
  let controller: SpendingCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendingCategoriesController],
    }).compile();

    controller = module.get<SpendingCategoriesController>(SpendingCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
