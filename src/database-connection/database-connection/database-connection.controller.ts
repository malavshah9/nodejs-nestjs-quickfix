import { Controller, Get } from '@nestjs/common';
import { DatabaseServiceService } from '../database-service/database-service.service';
import { TCR_class } from '../../DTO/TCR_class.dto';
import { RootParties } from '../../DTO/RootParties.dto';
import { instrument } from '../../DTO/Instrument.dto';
import { AppService } from '../../app.service';
import { HeaderServiceService } from '../../common-services/header-service/header-service.service';
import { TrdCapRptSideGrp } from '../../DTO/TrdCapRptSideGrp.dto';
import { MemoryMapService } from 'src/memory-map-service/memory-map.service';
var dateformat = require('dateformat');
var hashMap = require('../../memory-map-service/memory-store.js');
/*
        This controller is used to define following methods
        1.GET SERVICE : http://localhost:3000/submitTradeToNex
            --   Will fetch all records from proc_get_iress_left_tcr_nex () SP and sends these records to Quickfix Client server
                message type 35="AE" as TCR Report.
*/
@Controller('submitTradeToNex')
export class DatabaseConnectionController {
    constructor(private dbServer: DatabaseServiceService, private appService: AppService, private headerService: HeaderServiceService, private memoryMapService: MemoryMapService) { }
    @Get()
    getAll(): any {
        this.getDataSendMessage();
        return this.dbServer.getAll_iress_trade_left_TCR_NEX();
    }
    async getDataSendMessage() {
        this.dbServer.getAll_iress_trade_left_TCR_NEX().then(async (data: any[]) => {
            let mydata: any[] = data[0];
            for (const element of mydata) {
                if (element.TrdRptStatus != 0 && element.TrdRptStatus != 3) {
                    let obj = new TCR_class(element.t_id, 5, "2", 1, [new RootParties(15, "G", 3)], new instrument("0", "ISIN", "4"), parseInt(element.trade_volume), parseInt(element.trade_price), "CNY", "SINT",
                        dateformat(new Date(element.trade_date_time), "yyyymmdd")
                        , dateformat(new Date(element.trade_date_time_GMT), "yyyymmdd-HH:MM:ss.l")
                        , 1, [new TrdCapRptSideGrp("3")], 1, 11);
                    let tcrheader = this.headerService.getHeader("AE");
                    var msg = {
                        header: tcrheader.converter(),
                        tags: obj.getTags(),
                        groups: obj.getGroups()
                    };
                    msg.tags["22"] = '4';
                    msg.tags["48"] = "0X1213";
                    msg.tags["55"] = "BAC";
                    console.log(" TCR Report made with Database ", msg);
                    this.memoryMapService.UpdateMap(hashMap.TCR_Map, obj, false);
                    await this.appService.getQuickfixClient().then(async (quickfixClient) => {
                        await quickfixClient.send(msg, () => {
                            console.log("TCR sent ...", msg);
                        });
                    });
                }
            }
        });
    }
}
