var events = require('events');
var quickfix = require('../index');
var common = require('./common');
var path = require('path');
var initiator = quickfix.initiator;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { fixClient } from '../quickfix_examples/initiator';
import { AppService } from './app.service';
import { TradePriceConditionGrp } from './DTO/TradePriceConditionGrp.dto';
import { TCR_class } from './DTO/TCR_class.dto';
import { StandardHeader } from './DTO/StandardHeader.dto';

async function startFixClient() {
  fixClient.start(() => {
    console.log("fixClient started!!!...");
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);
  let message = await startFixClient().then(async () => {
    console.log("----------Quickfix Client Started----------");
    appService.setQuickfixClient(fixClient);
    process.stdin.resume();
  });
  await app.listen(3000);
}

bootstrap();
