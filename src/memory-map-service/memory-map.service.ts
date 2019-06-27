import { HeaderServiceService } from 'src/common-services/header-service/header-service.service';
import { TCR_class } from './../DTO/TCR_class.dto';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { DatabaseServiceService } from '../database-connection/database-service/database-service.service';
import { getConnection } from 'typeorm';
import { TCRAllFields } from '../DTO/TCRAllFields.dto';

const util = require('util')
var observableDiff = require('deep-diff').observableDiff;
var applyChange = require('deep-diff').applyChange;

@Injectable()
export class MemoryMapService {
    databaseService = null;
    constructor() { }
    merge(TCR_new: TCRAllFields, TCR_old: TCRAllFields) {
        observableDiff(TCR_old, TCR_new, function () {
                applyChange(TCR_old, TCR_new);
        });
        // observableDiff(TCR_old,TCR_new);
        return TCR_old;
    }
    // 1.Update value in TCR
    /* check whether 1390 == 3
            if yes than,
                        2.update Database,
                        3.remove from memorymap
            else,
                        2.update TCR
                        3.update TCR to Memory Map
    */
    UpdateMap(TCR_Map: any, TCR: any, isDatabaseUpdationNeeded: boolean = true) {
        if (this.databaseService == null)
            this.databaseService = new DatabaseServiceService(getConnection('default'), new HeaderServiceService());
        var newMergedTCR;
        if (!TCR_Map.has(TCR.TradeID)) {
            //TCR DoestNotExist in Map than add that TCR to Map
            TCR_Map.set(TCR.TradeID, TCR);
            newMergedTCR = TCR;
        }
        else {
            newMergedTCR = this.merge(TCR, TCR_Map.get(TCR.TradeID));
            if (newMergedTCR.TradePublishIndicator === 3) {
                TCR_Map.remove(TCR.TradeID);
            }
            else {
                TCR_Map.set(TCR.TradeID, newMergedTCR);
            }
        }
        if (isDatabaseUpdationNeeded) {
            var d = new Date();
            var dformat = [d.getFullYear(),
            d.getMonth() + 1,
            d.getDate()].join('-') + ' ' +
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
            this.databaseService.insertTCRAck(newMergedTCR.TradeID, newMergedTCR.SecondaryTradeID, newMergedTCR.TrdRptStatus, dformat, 2, newMergedTCR.TradePublishIndicator, newMergedTCR.TradeReportRejectReason, newMergedTCR.RejectText, newMergedTCR.WarningText, "", 0, "");
        }
        this.DisplayMap(TCR_Map);
    }
    DisplayMap(TCR_Map: any) {
        TCR_Map.entries().forEach(element => {
            console.log("new entry");
            console.log(util.inspect(element, false, null, true /* enable colors */))
        });
    }
}
