import { Module } from '@nestjs/common';
import { DatabaseServiceService } from './database-service/database-service.service';
import { DatabaseConnectionController } from './database-connection/database-connection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature() ],
  providers: [DatabaseServiceService],
  controllers: [DatabaseConnectionController],
})
export class DatabaseConnectionModule {}
