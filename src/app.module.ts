import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuickfixApiModule } from './quickfix_api/quickfix-api.module';
import { DatabaseConnectionModule } from './database-connection/database-connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [QuickfixApiModule, DatabaseConnectionModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
