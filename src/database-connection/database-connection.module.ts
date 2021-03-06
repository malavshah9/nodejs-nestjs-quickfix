import { Module } from '@nestjs/common';
import { DatabaseServiceService } from './database-service/database-service.service';
import { DatabaseConnectionController } from './database-connection/database-connection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeaderServiceService } from '../common-services/header-service/header-service.service';
import { AppService } from '../app.service';
import { MemoryMapService } from '../memory-map-service/memory-map.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [DatabaseServiceService, HeaderServiceService, AppService,MemoryMapService],
  controllers: [DatabaseConnectionController],
})
export class DatabaseConnectionModule { }
