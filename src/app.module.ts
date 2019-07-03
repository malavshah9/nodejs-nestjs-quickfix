import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionModule } from './database-connection/database-connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeaderServiceService } from '../src/common-services/header-service/header-service.service';
import { RedisDataService } from './redis-data/redis-data.service';

@Module({
  imports: [DatabaseConnectionModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService,HeaderServiceService],
})
export class AppModule {}
