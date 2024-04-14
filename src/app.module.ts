import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsFetcherService } from './transactions-fetcher/transactions-fetcher.service';
import { TransactionsCtrlController } from './transactions-ctrl/transactions-ctrl.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This will make the configuration available globally in your application
      envFilePath: '.env', // Specify the path to your .env file
      expandVariables: true, // Allows for the use of ${} syntax to embed environment variables within values
    }),
    HttpModule
  ],
  controllers: [AppController, TransactionsCtrlController],
  providers: [AppService, TransactionsFetcherService],
})
export class AppModule {}
