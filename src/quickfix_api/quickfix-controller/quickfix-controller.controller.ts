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
import { HeaderServiceService } from 'src/common-services/header-service/header-service.service';

@Controller('sendtcr')
export class QuickfixControllerController {
    TCRHeader:any;
    constructor(protected appService: AppService,protected headerService:HeaderServiceService) { }

    @Post()
    async sendTCRReport() {
      // var TCRReport=new TCR_class("1xsasdfdf",0,1,new RootParties(1,12,"G",3),"O",new instrument(
      //   "BAC","SECURE","4"
      // ),12,23,"CNY","SINT",dateformat(new Date(),"yyyymmdd"),dateformat(new Date(), "yyyymmdd-HH:MM:ss.l"),
      // new TrdCapRptSideGrp(1,"1"),1,11);
      // this.TCRHeader=this.headerService.getHeader("AE");
      // var msg={
      //   header:this.TCRHeader.converter(),
      //   tags:TCRReport.converter()
      // };
      var obj={ 
        header: 
          { '8': 'FIXT.1.1',
            '35': 'AE',
            '49': 'INITIATOR',
            '56': 'ACCEPTOR' },
         tags: 
          { '15': 'CNY',
            '22': '4',
            '30': 'SINT',
            '31': 23,
            '32': 12,
            '48': '0X1213',
            '552':  1,
            '55': 'BAC',
            '60': '20190605-15:43:07.189',
            '75': '20190605',
            '423': '1',
            '856': 0,
            '1003': '1xsasdfdf',
            '1116': 2,
            // '1117': 12,
            // '1118': 'G',
            // '1119': 3,
            '1924': 1,
            '1934': 11
           },
          groups:[{
            'index':552,
            'delim':54,
            'entries':[{54:'1'},{54:'2'}]
          },
        {
          'index':1116,
          'delim':1117,
          'entries':[{
            '1117': 12,
            '1118': 'G',
            '1119': 3
          },
        {
          '1117': 10,
          '1118': 'E',
          '1119': 3 
        }]
        }]
       };
      console.log(obj);
      if(obj.groups!=undefined){
        for(let ele in obj.groups){
          console.log("Group name: ",ele);
          console.log("Object: ",obj.groups[ele]);
        }
      }
        await this.appService.getQuickfixClient().then(async (quickfixClient)=>{
            await quickfixClient.send(obj, () => {
                console.log("TCR sent .....",obj);
              });
        });
        return 'Sending TCR Report';
    }
}




//*****************Sample Order */
  // let order = {
      //       header: {
      //         8: 'FIXT.1.1',
      //         35: 'D',
      //         49: "INITIATOR",
      //         56: "ACCEPTOR"
      //       },
      //       tags: {
      //         11: "0E0Z86K00000",
      //         48: "06051GDX4",
      //         22: 1,
      //         38: 200,
      //         40: 2,
      //         54: 1,
      //         55: 'BAC',
      //         218: 100,
      //         60: dateformat(new Date(), "yyyymmdd-HH:MM:ss.l"),
      //         423: 6
      //       }
      //     };