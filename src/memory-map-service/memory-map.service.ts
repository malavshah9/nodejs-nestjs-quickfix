import { HeaderServiceService } from 'src/common-services/header-service/header-service.service';
import { TCR_class } from './../DTO/TCR_class.dto';
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { DatabaseServiceService } from '../database-connection/database-service/database-service.service';
import { getConnection } from 'typeorm';
import { TCRAllFields } from '../DTO/TCRAllFields.dto';
const util = require('util')
@Injectable()
export class MemoryMapService {
    databaseService=null;
    constructor(){ }
    merge(TCR_new:TCRAllFields,TCR_old:TCRAllFields){
        for (const key in TCR_new) {
            if(key!=undefined && TCR_old[key]==undefined){
                    TCR_old[key]=TCR_new[key];
            }
        }
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
    UpdateMap(TCR_Map:any,TCR:any,isDatabaseUpdationNeeded:boolean=true){
        if(this.databaseService==null)
        this.databaseService=new  DatabaseServiceService(getConnection('default'),new HeaderServiceService());
        if(!TCR_Map.has(TCR.TradeID)){
            //TCR DoestNotExist in Map than add that TCR to Map
            TCR_Map.set(TCR.TradeID,TCR);
        }
        else{
            var newMergedTCR:any=this.merge(TCR,TCR_Map.get(TCR.TradeID));
            if(isDatabaseUpdationNeeded)
            this.databaseService.insertTCRAck(newMergedTCR.TradeID,newMergedTCR.SecondaryTradeID,newMergedTCR.TrdRptStatus,new Date().getTime().toString(),2,newMergedTCR.TradePublishIndicator,newMergedTCR.TradeReportRejectReason,newMergedTCR.RejectText,newMergedTCR.WarningText,"",0,"");
            if(newMergedTCR.TradePublishIndicator===3){
                TCR_Map.remove(TCR.TradeID);
            }
            else{
                TCR_Map.set(TCR.TradeID,newMergedTCR);
            }
        }
        this.DisplayMap(TCR_Map);
    }
    DisplayMap(TCR_Map:any){
        TCR_Map.entries().forEach(element => {
            console.log("new entry");
            console.log(util.inspect(element, false, null, true /* enable colors */))
        });
    }
}
