import { Module } from '@nestjs/common';
import { QuickfixControllerController } from './quickfix-controller/quickfix-controller.controller';
import { AppService } from 'src/app.service';
import { HeaderServiceService } from 'src/common-services/header-service/header-service.service';

@Module({
  controllers: [QuickfixControllerController],
  providers: [ AppService, HeaderServiceService ]
})
export class QuickfixApiModule { 
}
