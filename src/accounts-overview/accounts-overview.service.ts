import { HttpService } from '@nestjs/axios';
import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { Observable, map } from 'rxjs';
import { ApiKeyGuard } from '../api-key/api-key.guard';
import { UrlBuilder, formatDateTransaction, getBaseUrl } from '../resources/utils';

@Injectable()
@UseGuards(ApiKeyGuard)
export class AccountsOverviewService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {}
    
    fetchData(link: string): Observable<any> {
        const env = this.configService.get<string>('ENV');
        const api_id = this.configService.get<string>('API_ID')
        const api_pwd = this.configService.get<string>('API_PASSWORD');
        var base64encodedData = Buffer.from(`${api_id}:${api_pwd}`).toString('base64')
        const requestConfig: AxiosRequestConfig = {
            headers: {
                Authorization: `Basic ${base64encodedData}`
            }
        }
        let urlBuilder = new UrlBuilder(getBaseUrl(env));
        return this.httpService.get(
            urlBuilder
                .addPath('accounts')
                .addQueryParam('link', link)
                .build(),
                requestConfig
        ).pipe(
            map(response => this.processData(response.data))
      );
    }
    processData(data: any): AccountOverviewPresentation[]{
        let selection: AccountOverviewPresentation[] = []
        data.results.map((account) => {
            selection.push({
                bank_name: account.institution.name,
                account_name: account.name ,
                balance: account.balance.available
            });
        })
        return selection
    }
}
