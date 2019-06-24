/*
    In this app service basic quickfix client object will be stored for state maintainace
    and session synchronization
*/
import { stomp_it } from './ActiveMQ/stompit_start';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  protected quickfix_client: any;
  //Just demo method
  getHello(): string {
    return 'Hello World!';
  }
  // this method will store quickfix client to object of service
  setQuickfixClient(obj: any):void {
    this.quickfix_client = obj;
    let stom=new stomp_it();
    stom.startConnectionStompit(this.quickfix_client);    
  }
  // this method will be used to give the stored object of quickfix client
  async getQuickfixClient() {
    return await this.quickfix_client;
  }
}
