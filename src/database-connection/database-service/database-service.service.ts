import { Injectable } from '@nestjs/common';
import { EntityManager, getManager, Connection } from 'typeorm';

@Injectable()
    export class DatabaseServiceService {
    private readonly manager: EntityManager;
    constructor(private readonly connection: Connection) {
        this.manager = getManager(connection.name);
    }
    async getAllData() {
        const result = await this.manager.query('select * from event_log');
        return result;
    }
}
