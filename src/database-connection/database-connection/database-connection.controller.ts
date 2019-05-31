import { Controller, Get } from '@nestjs/common';
import { DatabaseServiceService } from '../database-service/database-service.service';

@Controller('databaseconnection')
export class DatabaseConnectionController {
    constructor(private dbServer: DatabaseServiceService) {}
    @Get()
    getAll(): any {
        return this.dbServer.getAllData();
    }
}
