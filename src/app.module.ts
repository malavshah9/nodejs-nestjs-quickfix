import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionModule } from './database-connection/database-connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseConnectionModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
