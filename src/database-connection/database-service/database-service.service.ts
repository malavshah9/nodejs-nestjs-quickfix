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
    async insertTCRAck(
        tradeId:number,
        secondaryTradeId:string,
        trdRptStatus:number,
        time:string,
        timeType:number,
        trdPublishIndicatore:number,
        trdReportRejectionReason:number,
        rejectText:string,
        warningText:string,
        businessRejectRefId:string,
        businessRejectReason:number,
        businessRejectText:string
    ) {
        try{
        const res=await this.manager.query('CALL proc_tcr_nex_submit (?,?,?,?,?,?,?,?,?,?,?,?)',[tradeId,secondaryTradeId,trdRptStatus,time,timeType,trdPublishIndicatore,trdReportRejectionReason,rejectText,warningText,businessRejectRefId,businessRejectReason,businessRejectText]);
        return res;
        }
        catch(QueryFailedError){
            console.log("Call to proc_tcr_nex_submit() failed because of duplication of primary key.")
        }
    }
}
