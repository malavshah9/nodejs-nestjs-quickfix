import { Module } from '@nestjs/common';
import { QuickfixControllerController } from './quickfix-controller/quickfix-controller.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [QuickfixControllerController],
  providers: [ AppService ]
})
export class QuickfixApiModule {
  
}
