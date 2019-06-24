import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/*
        This controller is used to define following methods
        1.GET SERVICE : http://localhost:3000/
            --   Will give "Hello World" message to client
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
