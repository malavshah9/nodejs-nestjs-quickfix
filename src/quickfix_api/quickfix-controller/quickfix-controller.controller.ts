var dateformat=require('dateformat');
var events = require('events');
var quickfix = require('../../../index');
var common = require('../../common');
var path = require('path');
var initiator = quickfix.initiator;
import { Controller, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TCR_class } from 'src/DTO/TCR_class.dto';
import { RootParties } from 'src/DTO/RootParties.dto';
import { instrument } from 'src/DTO/Instrument.dto';
import { TrdCapRptSideGrp } from 'src/DTO/TrdCapRptSideGrp.dto';
import { StandardHeader } from '../../DTO/StandardHeader.dto';

@Controller('sendtcr')
export class QuickfixControllerController {
    constructor(protected appService: AppService) { }

    @Post()
    async sendTCRReport() {
      // var TCRReport=new TCR_class("1xsasdfdf",0,1,new RootParties(1,12,"G",3),"O",new instrument(
      //   "N/A","SECURE","4"
      // ),12,23,"CNY","SINT",new Date().toString(),dateformat(new Date(), "yyyymmdd-HH:MM:ss.l"),
      // new TrdCapRptSideGrp(1,"1"),1,11);
      // var header=new StandardHeader("FIXT.1.1",30,"AE","INITIATOR3","ACCEPTOR",1);
      // var msg={
      //   header:header.convertToTags(),
      //   tags:TCRReport.convertToString()
      // };
      // console.log(msg);
      let order = {
            header: {
              8: 'FIXT.1.1',
              35: 'D',
              49: "INITIATOR3",
              56: "ACCEPTOR"
            },
            tags: {
              11: "0E0Z86K00000",
              48: "06051GDX4",
              22: 1,
              38: 200,
              40: 2,
              54: 1,
              55: 'BAC',
              218: 100,
              60: dateformat(new Date(), "yyyymmdd-HH:MM:ss.l"),
              423: 6
            }
          };
        await this.appService.getQuickfixClient().then(async (quickfixClient)=>{
            await quickfixClient.send(order, () => {
                console.log("order sent .....",order);
              });
        });
        return 'Sending TCR Report';
    }
}
