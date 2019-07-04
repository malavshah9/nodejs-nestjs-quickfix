var events = require('events');
var quickfix = require('../index');
var common = require('./common');
var path = require('path');
var initiator = quickfix.initiator;
const util = require('util');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { fixClient } from '../quickfix_examples/initiator';
import { AppService } from './app.service';
import { TradePriceConditionGrp } from './DTO/TradePriceConditionGrp.dto';
import { TCR_class } from './DTO/TCR_class.dto';
import { StandardHeader } from './DTO/StandardHeader.dto';
import { RedisDataService } from './redis-data/redis-data.service';

var hashMap = require('../src/memory-map-service/memory-store.js');

async function startFixClient() {
  fixClient.start(() => {
    console.log("fixClient started!!!...");
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);
  const redisService=app.get(RedisDataService);
  let message = await startFixClient().then(async () => {
    console.log("----------Quickfix Client Started----------");
    /*
      below call will store the quickfixClient instance to service so that we can retreive it whenever we want
    */
    await appService.setQuickfixClient(fixClient).then(()=>{
      redisService.configureRedis(fixClient);
    });
    process.stdin.resume();
  });
  process.stdin.on('data', function (data) {
    console.log(" new entry ");
    console.log(util.inspect(hashMap, false, null, true ));
  });
  await app.listen(3000);
}

bootstrap();
