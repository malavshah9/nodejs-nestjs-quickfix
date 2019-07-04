/*
        Basic database connection to server configure at ormconfig.json
*/
import { HeaderServiceService } from './../../common-services/header-service/header-service.service';
import { Injectable } from '@nestjs/common';
import { EntityManager, getManager, Connection, QueryFailedError } from 'typeorm';
import { TCR_class } from 'src/DTO/TCR_class.dto';
import { throwError } from 'rxjs';
@Injectable()
export class DatabaseServiceService {
    private readonly manager: EntityManager;
    protected quickfix_client: any;
    constructor(private readonly connection: Connection, private headerService: HeaderServiceService) {
        this.manager = getManager(connection.name);
    }
    /*
        This function used to get all data from TCR_NEX;
    */
    async getAllData() {
        const result = await this.manager.query('select * from TCR_NEX');
        return result;
    }
    /*
        This function used to call SP name as "proc_get_iress_left_tcr_nex";
    */
    async getAll_iress_trade_left_TCR_NEX() {
        const res = await this.manager.query('CALL proc_get_iress_left_tcr_nex ()');
        return res;
    }
    /*
        This function used to insert TCRAck to database configured at ormconfig file.
    */
    async insertTCRAck(
        tradeId: number,
        secondaryTradeId: string,
        trdRptStatus: number,
        time: string,
        timeType: number,
        trdPublishIndicatore: number,
        trdReportRejectionReason: number,
        rejectText: string,
        warningText: string,
        businessRejectRefId: string,
        businessRejectReason: number,
        businessRejectText: string
    ) {
        try {
            if (tradeId === undefined) {
                throwError(QueryFailedError);
            }
            else {
                if (secondaryTradeId === undefined)
                    secondaryTradeId = "";
                if (trdRptStatus === undefined)
                    trdRptStatus = 0;
                if (time === undefined)
                    time = "";
                if (timeType === undefined)
                    timeType = 0;
                if (trdPublishIndicatore === undefined)
                    trdPublishIndicatore = 0;
                if (trdReportRejectionReason === undefined)
                    trdReportRejectionReason = 0;
                if (rejectText === undefined)
                    rejectText = "";
                if (warningText === undefined)
                    warningText = "";
                if (businessRejectRefId === undefined)
                    businessRejectRefId = "";
                if (businessRejectReason === undefined)
                    businessRejectReason = 0;
                if (businessRejectText === undefined)
                    businessRejectText = "";
            }
            const res = await this.manager.query('CALL proc_tcr_nex_submit (?,?,?,?,?,?,?,?,?,?,?,?)', [tradeId, secondaryTradeId, trdRptStatus, time, timeType, trdPublishIndicatore, trdReportRejectionReason, rejectText, warningText, businessRejectRefId, businessRejectReason, businessRejectText]);
            // throw QueryFailedError;
            return res;
        }
        // QueryFailedError
        catch (QueryFailedError) {
            console.log("Call to proc_tcr_nex_submit() failed because of duplication of primary key.");
        }
        // catch (Error){

        // }
    }
    /*
        This function used make whole message from content of TCR class.
    */
    async makeTCRReport(obj: TCR_class) {
        let tcrheader = await this.headerService.getHeader("AE");
        var msg = {
            header: await tcrheader.converter(),
            tags: obj.getTags(),
            groups: obj.getGroups()
        };
        msg.tags["22"] = '4';
        msg.tags["48"] = "0X1213";
        msg.tags["55"] = "BAC";
        return msg;
    }
}
