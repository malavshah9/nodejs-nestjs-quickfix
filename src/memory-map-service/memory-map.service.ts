import { TradeCaptureReportAck } from './../DTO/TradeCaptureReportAck.dto';
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
    /*
        This method will update the existing TCR by getting the value from TCRACK/TCR that we get from NEX.
    */
    async merge(TCR_new: TCRAllFields, TCR_old: TCRAllFields) {
        await mixing(TCR_old, TCR_new);
        return TCR_old;
    }
    /*
        This method does the following task:
            1. If TCR does not present than add that TCR to Map
            2. If TCR exist in the Map than update the value by calling merge() method.
            3. Update the Database Values.
    */
    async UpdateMap(TCR_Map: any, TCR: any, isDatabaseUpdationNeeded: boolean = true) {
        let tcr = Promise.resolve(TCR);
        tcr.then(async function (value) {
            let newMergedTCR = value;
            let databaseService = new DatabaseServiceService(getConnection('default'), new HeaderServiceService());
            var d = new Date();
            if (!TCR_Map.has(value.TradeID)) {
                TCR_Map.set(value.TradeID, value);
            }
            else {
                let newMergedTCR = mixing(TCR_Map.get(value.TradeID), value);
                TCR.SecondaryTradeID=newMergedTCR.SecondaryTradeID;
                if (newMergedTCR.TradePublishIndicator === 2) {
                    TCR_Map.remove(value.TradeID);
                }
                else {
                    TCR_Map.set(value.TradeID, newMergedTCR);
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
                await databaseService.insertTCRAck(newMergedTCR.TradeID, newMergedTCR.SecondaryTradeID, newMergedTCR.TrdRptStatus, dformat, 2, newMergedTCR.TradePublishIndicator, newMergedTCR.TradeReportRejectReason, newMergedTCR.RejectText, newMergedTCR.WarningText, "", 0, "");
            }
        });
    }
    async DisplayMap(TCR_Map: any) {
        TCR_Map.entries().forEach(element => {
            console.log("new entry");
            console.log(util.inspect(element, false, null, true /* enable colors */))
        });
    }
}
