import { Controller, Get, Query } from '@nestjs/common';
import { FinancialHealthService } from './financial-health.service';
import { Observable } from 'rxjs';

@Controller('financial-health')
export class FinancialHealthController {
    constructor(private readonly financialHealthService: FinancialHealthService) {}

    @Get()
    fetchData(@Query('link') link: string): Observable<any> {

      return this.financialHealthService.fetchData(link);
    }
}
