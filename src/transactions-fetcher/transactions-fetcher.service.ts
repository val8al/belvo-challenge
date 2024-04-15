import { HttpService } from '@nestjs/axios';
import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { Observable, map } from 'rxjs';
import { ApiKeyGuard } from 'src/api-key/api-key.guard';
import { PAGINATION_VALUES } from 'src/resources/consts';
import { UrlBuilder, formatDateTransaction, getBaseUrl } from 'src/resources/utils';

@Injectable()
@UseGuards(ApiKeyGuard)
export class TransactionsFetcherService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {

    }
    
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
                .addPath('transactions')
                .addQueryParam('page', PAGINATION_VALUES.transactions)
                .addQueryParam('link', link)
                .build(),
                requestConfig
        ).pipe(
            map(response => this.processData(response.data))
      );
    }
    processData(data: any): TransactionPresentation[]{
        let selection: TransactionPresentation[] = []
        data.results.map((transaction) => {
            selection.push({
                amount: transaction.amount,
                type: transaction.type,
                status: transaction.status,
                description: transaction.description,
                created_at: formatDateTransaction(transaction.accounting_date),
                merchant_name: transaction.merchant.name
            })
        })
        return selection
    }
}
