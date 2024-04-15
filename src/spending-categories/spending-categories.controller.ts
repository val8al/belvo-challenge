import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SpendingCategoriesService } from './spending-categories.service';

@Controller('spending-categories')
export class SpendingCategoriesController {
    constructor(private readonly spendingCategoryService: SpendingCategoriesService) {}

    @Get()
    fetchData(@Query('link') link: string): Observable<any> {

      return this.spendingCategoryService.fetchData(link);
    }
}
