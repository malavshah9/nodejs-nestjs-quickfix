var dateformat=require('dateformat');
var events = require('events');
var quickfix = require('../../../index');
var common = require('../../common');
var path = require('path');
var initiator = quickfix.initiator;
import { Controller, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('sendtcr')
export class QuickfixControllerController {
    constructor(protected appService: AppService) { }
    @Post()
    async sendTCRReport() {
        let order = {
            header: {
              8: 'FIXT.1.1',
              35: 'D',
              49: "INITIATOR",
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
