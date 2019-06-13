var dateformat = require('dateformat');
var events = require('events');
var quickfix = require('../../../index');
var common = require('../../common');
var path = require('path');
var util=require('util');

var initiator = quickfix.initiator;
import { Controller, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TCR_class } from 'src/DTO/TCR_class.dto';
import { RootParties } from 'src/DTO/RootParties.dto';
import { instrument } from 'src/DTO/Instrument.dto';
import { TrdCapRptSideGrp } from 'src/DTO/TrdCapRptSideGrp.dto';
import { StandardHeader } from '../../DTO/StandardHeader.dto';
import { HeaderServiceService } from 'src/common-services/header-service/header-service.service';
import { TcrServiceService } from 'src/common-services/tcr-service/tcr-service.service';
import { Parties } from 'src/DTO/Parties.dto';
@Controller('sendtcr')
export class QuickfixControllerController {
  TCRHeader: any;
  TCRReportFinal:any;
  constructor(protected appService: AppService, protected headerService: HeaderServiceService, protected tcrService: TcrServiceService) {
    let trdCapSideGrp=new TrdCapRptSideGrp("1");
    trdCapSideGrp.NoPartyIDs=2;
    let party_one=new Parties();
    party_one.PartyID="party_one";
    party_one.PartyIDSource="N";
    party_one.PartyRole=56;
    let party_two=new Parties();
    party_two.PartyID="party_two";
    party_two.PartyIDSource="N";
    party_two.PartyRole=56;
    trdCapSideGrp.Parties=[party_one,party_two];
    
    var TCRReport = new TCR_class("1xsasdfdf", 0, "1", 2, [new RootParties(12, "G", 3),new RootParties(15,"G",3)], new instrument(
      "BAC", "SECURE", "4"), 12, 23, "CNY", "SINT", dateformat(new Date(), "yyyymmdd"), dateformat(new Date(), "yyyymmdd-HH:MM:ss.l"), 2,
      [trdCapSideGrp,new TrdCapRptSideGrp("3")], 1, 11);
    this.TCRHeader = this.headerService.getHeader("AE");
    var msg = {
      header: this.TCRHeader.converter(),
      tags: TCRReport.getTags(),
      groups: TCRReport.getGroups()
    };
    msg.tags["22"]='4';
    msg.tags["48"]="0X1213";
    msg.tags["55"]="BAC";
    this.TCRReportFinal=msg;
    // console.log("msg = ", msg);
  }

  @Post()
  async sendTCRReport() {
    console.log(util.inspect(this.TCRReportFinal, {showHidden: false, depth: null}));
    // console.log("entries ",this.TCRReportFinal.groups);
    // this.TCRReportFinal.groups.forEach(element => {
    //   console.log("TCRREPORT FINAL GROUP");
    //   element.entries.forEach(ele => {
    //       console.log("ent ",ele);
    //       if(ele.groups!=undefined){
    //         ele.groups.entries.forEach(el => {
    //               console.log("el ",el);
    //         });
    //       }
    //   });
      
    // });
    await this.appService.getQuickfixClient().then(async (quickfixClient) => {
      await quickfixClient.send(this.TCRReportFinal, () => {
        console.log("TCR sent ...", this.TCRReportFinal);
      });
    });
    return 'Sending TCR Report';
  }
}




//*****************Sample Order */
  // let order = {
      //       header: {
      //         8: 'FIXT.1.200,1',
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


       // console.log("this.TCRReportFinal ",this.TCRReportFinal);
    // this.TCRReportFinal.groups.forEach(element => {
    //   console.log("Group  ");
    //   element.entries.forEach(ele => {
    //       console.log("ele ",ele);
    //   });
    // });
    // var obj = {
    //   header:
    //   {
    //     '8': 'FIXT.1.1',
    //     '35': 'AE',
    //     '49': 'INITIATOR',
    //     '56': 'ACCEPTOR'
    //   },
    //   tags:
    //   {
    //     '15': 'CNY',   
    //     '22': '4',
    //     '30': 'SINT',
    //     '31': 23,
    //     '32': 12,
    //     '48': '0X1213',
    //     '552': 1,
    //     '55': 'BAC',
    //     '60': '20190605-15:43:07.189',
    //     '75': '20190605',
    //     '423': '1',
    //     '856': 0,
    //     '1003': '1xsasdfdf',
    //     '1116': 2,
    //     // '1117': 12,
    //     // '1118': 'G',
    //     // '1119': 3,
    //     '1924': 1,
    //     '1934': 11
    //   },
    //   groups: [{
    //     'index': 552,
    //     'delim': 54,
    //     'entries': [{ 54: '1' }, { 54: '2' }]
    //   },
    //   {
    //     'index': 1116,
    //     'delim': 1117,
    //     'entries': [{
    //       '1117': 12,
    //       '1118': 'G',
    //       '1119': 3
    //     },
    //     {
    //       '1117': 10,
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    //       '1118': 'E',
    //       '1119': 3
    //  
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    //  
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    // }
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    // c
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    // c
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);crService.getTCRReportDemoObj());
    // i
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    //  
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    //  
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    //  
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    //  
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    // }
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);
    // var obj=this.TCRReportFinal;
    // console.log("obj ",obj);