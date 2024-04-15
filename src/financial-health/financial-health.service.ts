import { HttpService } from '@nestjs/axios';
import { Injectable, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { Observable, map } from 'rxjs';
import { ApiKeyGuard } from 'src/api-key/api-key.guard';
import { PAGINATION_VALUES } from 'src/resources/consts';
import { UrlBuilder, getBaseUrl } from 'src/resources/utils';

@Injectable()
@UseGuards(ApiKeyGuard)
export class FinancialHealthService {
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
    processData(data: any): FinancialHealthPresentation{
        let healthOutlook: FinancialHealthPresentation = {
            totalExpenses: 0,
            totalIncome: 0,
            revenue: 0
        }
        data.results.map((transaction) => {
            if (transaction.type === "OUTFLOW"){
                healthOutlook.totalExpenses -= transaction.amount
                healthOutlook.revenue -= transaction.amount
            }else {
                healthOutlook.totalIncome += transaction.amount
                healthOutlook.revenue += transaction.amount
            } 
        });
        Object.keys(healthOutlook).forEach((key) =>{
            healthOutlook[key] = Number(healthOutlook[key].toFixed(2));
        });
        return healthOutlook
    }
}
