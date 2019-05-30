var dateformat=require('dateformat');
var events = require('events');
var quickfix = require('../index');
var common = require('./common');
var path = require('path');
var initiator = quickfix.initiator;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { fixClient } from '../quickfix_examples/initiator';
async function startFixClient() {
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
  
  fixClient.start(()=>{
    console.log("fixClient started!!!...");
    // process.stdin.resume();
  });
  return order;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  let message = await startFixClient().then(async (order)=>{
    await fixClient.send(order,()=>{
      console.log("order sent .....",order);
      process.stdin.resume();
    });
  });
  

  await app.listen(3000);
}

bootstrap();
