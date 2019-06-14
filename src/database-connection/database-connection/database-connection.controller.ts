import { Controller, Get } from '@nestjs/common';
import { DatabaseServiceService } from '../database-service/database-service.service';
import { Timestamp } from 'typeorm';

@Controller('databaseconnection')
export class DatabaseConnectionController {
    constructor(private dbServer: DatabaseServiceService) {}
    @Get()
    getAll(): any {
        // return this.dbServer.getAllData();
        // return this.dbServer.insertTCRAck(2,"2",3,new Date().toUTCString(),1,1,1,"Nothing","warn","12",1,"sss");
        return this.dbServer.insertTCRAck(2,"2",3,new Date().toUTCString(),1,1,1,"Nothing","warn","12",1,"sss");
    }
}
