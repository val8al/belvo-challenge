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
export class SpendingCategoriesService {
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
                .addPath('transactions')
                .addQueryParam('page', PAGINATION_VALUES.transactions)
                .addQueryParam('link', link)
                .build(),
                requestConfig
        ).pipe(
            map(response => this.processData(response.data))
      );
    }
    processData(data: any): CategorizedTransactionPresentation[]{
        let selection: CategorizedTransactionPresentation[] = []
        let reduced = data.results.reduce(
            (result: any, currentValue: any) => {
                (result[currentValue['category']] = 
                    result[currentValue['category']] || []).push(currentValue);

                return result;
            }
        ,{}) 

        Object.keys(reduced).forEach((key)=>{
            key != "null" && selection.push(
                {category: key, 
                amount: Number(reduced[key].reduce((sum,item) => 
                    item.type === "INFLOW" ? 
                        sum + item.amount
                        : sum - item.amount
                , 0).toFixed(2)), //sum all the occurrences
                transactions: reduced[key].length
                }
            )
        })
        return selection
    }
}
