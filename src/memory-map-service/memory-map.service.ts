import { HeaderServiceService } from 'src/common-services/header-service/header-service.service';
import { TCR_class } from './../DTO/TCR_class.dto';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { DatabaseServiceService } from '../database-connection/database-service/database-service.service';
import { getConnection } from 'typeorm';
import { TCRAllFields } from '../DTO/TCRAllFields.dto';

const util = require('util')
var mixing = require("mixing");
mixing.setSettings({ overwrite: true, oneSource: true, recursive: true, mixFromArray: true, mixToArray: true });

@Injectable()
export class MemoryMapService {
    databaseService = null;
    constructor() { }
    merge(TCR_new: TCRAllFields, TCR_old: TCRAllFields) {
        mixing(TCR_old, TCR_new);
        console.log(" TCR_new ",TCR_new);
        return TCR_old;
    }
    UpdateMap(TCR_Map: any, TCR: any, isDatabaseUpdationNeeded: boolean = true) {
        let newMergedTCR;
        if (this.databaseService == null)
            this.databaseService = new DatabaseServiceService(getConnection('default'), new HeaderServiceService());
        if (!TCR_Map.has(TCR.TradeID)) {
            TCR_Map.set(TCR.TradeID, TCR);
        }
        else {
            newMergedTCR = this.merge(TCR, TCR_Map.get(TCR.TradeID));
            if (newMergedTCR.TradePublishIndicator === '2') {
                TCR_Map.remove(TCR.TradeID);
            }
            else {
                TCR_Map.set(TCR.TradeID, newMergedTCR);
            }
            var d = new Date();
            var dformat = [d.getFullYear(),
            d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
            this.databaseService.insertTCRAck(newMergedTCR.TradeID, newMergedTCR.SecondaryTradeID, newMergedTCR.TrdRptStatus, dformat, 2, newMergedTCR.TradePublishIndicator, newMergedTCR.TradeReportRejectReason, newMergedTCR.RejectText, newMergedTCR.WarningText, "", 0, "");
        }
        // if (isDatabaseUpdationNeeded) {
        //     var d = new Date();
        //     var dformat = [d.getFullYear(),
        //     d.getMonth() + 1,
        //     d.getDate()].join('-') + ' ' +
        //         [d.getHours(),
        //         d.getMinutes(),
        //         d.getSeconds()].join(':');
        //     this.databaseService.insertTCRAck(newMergedTCR.TradeID, newMergedTCR.SecondaryTradeID, newMergedTCR.TrdRptStatus, dformat, 2, newMergedTCR.TradePublishIndicator, newMergedTCR.TradeReportRejectReason, newMergedTCR.RejectText, newMergedTCR.WarningText, "", 0, "");
        // }
        this.DisplayMap(TCR_Map);
    }
    DisplayMap(TCR_Map: any) {
        TCR_Map.entries().forEach(element => {
            console.log("new entry");
            console.log(util.inspect(element, false, null, true /* enable colors */))
        });
    }
}
