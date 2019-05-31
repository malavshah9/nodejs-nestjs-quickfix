import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  protected quickfix_client: any;
  getHello(): string {
    return 'Hello World!';
  }
  setQuickfixClient(obj: any): void {
    this.quickfix_client = obj;
    console.log(" setQuickfixClient() called ", obj);
  }
  async getQuickfixClient() {
    console.log(" getQuickfixClient() called ");
    return this.quickfix_client;
  }
}
