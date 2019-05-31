import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuickfixApiModule } from './quickfix_api/quickfix-api.module';

@Module({
  imports: [QuickfixApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
