/*
    In this app service basic quickfix client object will be stored for state maintainace
    and session synchronization
*/
import { stomp_it } from './ActiveMQ/stompit_start';
import { Injectable, Inject } from '@nestjs/common';
import { RootParties } from '../src/DTO/RootParties.dto';
import { instrument } from '../src/DTO/Instrument.dto';
import { TrdCapRptSideGrp } from '../src/DTO/TrdCapRptSideGrp.dto';
import { HeaderServiceService } from './common-services/header-service/header-service.service';
import { RedisDataService } from './redis-data/redis-data.service';
const util = require('util');
var dateformat = require('dateformat');

@Injectable()
export class AppService {
  protected quickfix_client: any;
  //Just demo method
  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }
  //This Method will do following tasks.
  // 1. this method will store quickfix client to object of service
  // 2. Start listening on ActiveMQ
  async setQuickfixClient(obj: any): Promise<void> {
    this.quickfix_client = obj;
    // let stom = new stomp_it();
    // await stom.startConnectionStompit(this.quickfix_client);
  }
  // this method will be used to give the stored object of quickfix client
  async getQuickfixClient() {
    return await this.quickfix_client;
  }
}



/*
------------TCR MESSAGE 
@Inject('HeaderServiceService') private headerService: HeaderServiceService

    let tcrMessage: TCR_class;
    tcrMessage = new TCR_class("1234", 0, "1", 2, [new RootParties(1, "G", 3), new RootParties(2, "G", 3)], new instrument("[N/A]", "NoSECURITY", "4"), 120, 4500, "CNY", "MIC", dateformat(new Date(), "yyyymmdd"), dateformat(new Date(), "yyyymmdd-HH:MM:ss.l"), 2, [new TrdCapRptSideGrp("1"), new TrdCapRptSideGrp("2")], 0, 11);
    let tcrheader = this.headerService.getHeader("AE");
    var msg = {
      header: tcrheader.converter(),
      tags: tcrMessage.getTags(),
      groups: tcrMessage.getGroups()
    };
    msg.tags["22"] = '4';
    msg.tags["48"] = "0X1213";
    msg.tags["55"] = "BAC";
    
    this.quickfix_client.send(msg, () => {
      console.log(util.inspect(msg, false, null, true /* enable colors */
        /*))
    });
*/