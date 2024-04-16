import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsFetcherService } from './transactions-fetcher/transactions-fetcher.service';
import { TransactionsCtrlController } from './transactions-ctrl/transactions-ctrl.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FinancialHealthService } from './financial-health/financial-health.service';
import { FinancialHealthController } from './financial-health/financial-health.controller';
import { SpendingCategoriesController } from './spending-categories/spending-categories.controller';
import { SpendingCategoriesService } from './spending-categories/spending-categories.service';
import { AccountsOverviewController } from './accounts-overview/accounts-overview.controller';
import { AccountsOverviewService } from './accounts-overview/accounts-overview.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This will make the configuration available globally in your application
      envFilePath: '.env', // Specify the path to your .env file
      expandVariables: true, // Allows for the use of ${} syntax to embed environment variables within values
    }),
    HttpModule
  ],
  controllers: [AppController, TransactionsCtrlController, FinancialHealthController, SpendingCategoriesController, AccountsOverviewController],
  providers: [AppService, TransactionsFetcherService, FinancialHealthService, SpendingCategoriesService, AccountsOverviewService],
})
export class AppModule {}
