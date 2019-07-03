import { Injectable } from '@nestjs/common';

var redis = require("redis");
var fs = require('fs');
var assert = require('assert');
var filename = 'grumpyCat.jpg';

@Injectable()
export class RedisDataService {
    client:any;
    readonly fileName="demo_xml.xml";
    constructor(){
        this.client=redis.createClient({
            host:"127.0.0.1",
            port:"6379"
        });
        this.client.get(this.fileName,function(err,reply){
            if(err){
                console.log(" Error in Redis ",err);
            }
            console.log(" data ",reply);
        });
    }

}
