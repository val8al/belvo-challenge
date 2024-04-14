import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TransactionsFetcherService } from 'src/transactions-fetcher/transactions-fetcher.service';

@Controller('transactions-ctrl')
export class TransactionsCtrlController {
    constructor(private readonly dataFetcherService: TransactionsFetcherService) {}

    @Get()
    fetchData(@Query('link') link: string): Observable<any> {

      return this.dataFetcherService.fetchData(link);
    }
}
