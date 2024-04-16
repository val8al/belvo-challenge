import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountsOverviewService } from './accounts-overview.service';

@Controller('accounts-overview')
export class AccountsOverviewController {
    constructor(private readonly accountsOverviewService: AccountsOverviewService) {}

    @Get()
    fetchData(@Query('link') link: string): Observable<any> {

      return this.accountsOverviewService.fetchData(link);
    }
}
