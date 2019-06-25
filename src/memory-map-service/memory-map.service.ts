import { TCR_class } from './../DTO/TCR_class.dto';
import { Injectable } from '@nestjs/common';
import { DatabaseServiceService } from '../database-connection/database-service/database-service.service';
var HashMap = require('hashmap');
@Injectable()
export class MemoryMapService {
    TCR_Map:any;
    constructor(protected databaseService:DatabaseServiceService){
        this.TCR_Map=new HashMap();
    }
    merge(TCR1:any,TCR2:any){
        var obj;
        
        return obj;
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
    UpdateMap(TCR:any,isDatabaseUpdationNeeded:boolean=true){
        if(!this.TCR_Map.has(TCR.TradeID)){
            //TCR DoestNotExist in Map than add that TCR to Map
            this.TCR_Map.set(TCR.TradeID,TCR);
        }
        else{
            var newMergedTCR:any=this.merge(TCR,this.TCR_Map.get(TCR.TradeID));
            if(isDatabaseUpdationNeeded)
            this.databaseService.insertTCRAck(newMergedTCR.TradeID,newMergedTCR.SecondaryTradeID,newMergedTCR.TrdRptStatus,new Date().getTime().toString(),2,newMergedTCR.TradePublishIndicator,newMergedTCR.TradeReportRejectReason,newMergedTCR.RejectText,newMergedTCR.WarningText,"",0,"");
            if(newMergedTCR.TradePublishIndicator===3){
                this.TCR_Map.remove(TCR.TradeID);
            }
            else{
                this.TCR_Map.set(TCR.TradeID,newMergedTCR);
            }
        }
    }

}
