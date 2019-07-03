import { Parties } from './../../DTO/Parties.dto';
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
const util = require('util')
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
    async getAll(): Promise<any> {
        await this.getDataSendMessage();
        return this.dbServer.getAll_iress_trade_left_TCR_NEX();
    }
    async getDataSendMessage() {


        let msg = {
            header:
            {
                '8': 'FIXT.1.1',
                '34': 0,
                '35': 'AE',
                '49': 'DINOSAUR',
                '56': 'NEX'
            },
            tags:
            {
                '15': 'CNY',
                '22': '4',
                '30': 'SINT',
                '31': 455,
                '32': 2600,
                '48': 'EZTP571VT5Z7',
                '55': '[N/A]',
                '60': '20180104-14:07:31.000',
                '75': '20180104',
                '423': '2',
                '552': 1,
                '856': 0,
                '1003': '2',
                '1116': 1,
                '1924': 1,
                '1934': 11
            },
            groups:
                [{
                    index: 552, delim: 54, entries: [
                        {
                            '54': "1",
                            '453': "3",
                            groups: [{
                                index: 453,
                                delim: 448,
                                entries: [
                                    {
                                        '448': "GC1",
                                        '447': "N",
                                        '452': 56
                                    },
                                    {
                                        '448': "GC2",
                                        '447': "N",
                                        '452': 56
                                    },
                                    {
                                        '448': "GC3",
                                        '447': "N",
                                        '452': 56
                                    }
                                ]
                            }]
                        }
                    ]
                },
                {
                    index: 1116, delim: 1117, entries: [{
                        '1117': "15",
                        '1118': "G",
                        '1119': 3
                    }]
                }]
        };
        await this.appService.getQuickfixClient().then(async (quickfixClient) => {
            await quickfixClient.send(msg, () => {
                console.log("TCR sent ...", msg);
                console.log(" after sending msg ")
                msg.groups.forEach(element => {
                    element.entries.forEach(ele => {
                        console.log(" entr ", ele);
                        if (ele.groups != undefined) {
                            ele.groups.forEach(et => {
                                console.log(et.entries);
                            });
                        }
                    });
                });
            });
        });
        await this.dbServer.getAll_iress_trade_left_TCR_NEX().then(async (data: any[]) => {
            let mydata: any[] = data[0];
            for (const element of mydata) {
                if (element.TrdRptStatus != 0 && element.TrdRptStatus != 3) {
                    let trdCapGrp = new TrdCapRptSideGrp("1");
                    trdCapGrp.NoPartyIDs = "2";
                    var part1 = new Parties();
                    part1.PartyID = "NEX";
                    part1.PartyIDSource = "N";
                    part1.PartyRole = 56;
                    var part2 = new Parties();
                    part2.PartyID = "NEX";
                    part2.PartyIDSource = "G";
                    part2.PartyRole = 56;
                    trdCapGrp.Parties = [part1, part2];
                    let obj = new TCR_class(element.t_id, 0, "2", 1, [new RootParties("15", "G", 3)],
                        new instrument("[N/A]", "EZTP571VT5Z7", "4"),
                        2600,
                        parseInt(element.trade_price),
                        "CNY",
                        "SINT",
                        dateformat(new Date(element.trade_date_time), "yyyymmdd"),
                        dateformat(new Date(element.trade_date_time_GMT), "yyyymmdd-HH:MM:ss.l"),
                        1,
                        [trdCapGrp],
                        1,
                        11);
                    let tcrheader = await this.headerService.getHeader("AE");
                    var msg = {
                        header: await tcrheader.converter(),
                        tags: await obj.getTags(),
                        groups: await obj.getGroups()
                    };
                    // msg.tags["22"] = '4';
                    // msg.tags["48"] = "0X1213";
                    // msg.tags["55"] = "BAC";
                    // console.log("------------");
                    // await console.log(" after sending msg ")
                    // await msg.groups.forEach(async element => {
                    //     await element.entries.forEach(async ele => {
                    //         await console.log(" entr ", ele);
                    //         if (ele.groups != undefined) {
                    //             await ele.groups.forEach(async et => {
                    //                 await console.log(et.entries);
                    //             });
                    //         }
                    //     });
                    // });
                    // // console.log(util.inspect(msg, false, 5, true /* enable colors */));
                    // // console.log(" mess ", msg);1
                    // console.log("------------");
                    // msg["552"]=2;
                    // msg.groups.push({
                    //     index:552,
                    //     delim:54,
                    //     entries:[{
                    //         '54':1,
                    //         '453':1,
                    //         '448':"NEX",
                    //         '447':"G",
                    //         '452':56
                    //     },
                    //     {
                    //     '54':1,
                    //     '453':2,
                    //     '448':"NEX",
                    //     '447':"G",
                    //     '452':56
                    // }]
                    // });
                    // console.log(util.inspect(msg, false, null, true /* enable colors */))
                    await this.memoryMapService.UpdateMap(hashMap.TCR_Map, obj, false);
                    await console.log("sending message ", msg);
                    await this.appService.getQuickfixClient().then(async (quickfixClient) => {
                        await quickfixClient.send(msg, () => {
                            // console.log("TCR sent ...", msg);
                           
                        });
                    });
                }
            }
        });
    }
}
