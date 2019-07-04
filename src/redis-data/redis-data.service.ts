import { HeaderServiceService } from './../common-services/header-service/header-service.service';
import { TCR_class } from 'src/DTO/TCR_class.dto';
import { TrdCapRptSideGrp } from './../DTO/TrdCapRptSideGrp.dto';
import { instrument } from './../DTO/Instrument.dto';
import { RootParties } from './../DTO/RootParties.dto';
import { Injectable, Inject } from '@nestjs/common';
import { MemoryMapService } from '../memory-map-service/memory-map.service';
import { AppService } from 'src/app.service';

var redis = require("redis");
var fs = require('fs');
var assert = require('assert');
var path = require('path');
var filename = path.dirname(module.filename) + '/demo_xml.xml';
var parser = require('fast-xml-parser');
var dateformat = require('dateformat');
var he = require('he');
var hashMap = require('../memory-map-service/memory-store.js');

@Injectable()
export class RedisDataService {
    client: any;
    constructor() {
        let options = {
            attributeNamePrefix: "@_",
            attrNodeName: "attr", //default is 'false'
            textNodeName: "#text",
            ignoreAttributes: true,
            ignoreNameSpace: false,
            allowBooleanAttributes: false,
            parseNodeValue: true,
            parseAttributeValue: false,
            trimValues: true,
            cdataTagName: "__cdata", //default is 'false'
            cdataPositionChar: "\\c",
            localeRange: "", //To support non english character in tag/attribute values.
            parseTrueNumberOnly: false,
            attrValueProcessor: a => he.decode(a, { isAttributeValue: true }),//default is a=>a
            tagValueProcessor: a => he.decode(a) //default is a=>a
        };
        this.client = redis.createClient({
            host: "127.0.0.1",
            port: "6379"
        });
        this.client.subscribe('tcr_xml', (err, count) => {
            if (err)
                console.log(err);
            else { }
        });
        console.log("----------Redis Client Started----------");
    }
    configureRedis(quickfix_client: any) {
        this.client.on('message', async function (channel, message) {
            var jsonObj = parser.parse(message);
            let tcr_obj = new TCR_class(jsonObj.trade_number + "", 5, "2", 1, [new RootParties("15", "G", 3)], new instrument("0", jsonObj.security_id, "4"), Math.abs(parseInt(jsonObj.trade_volume)), parseInt(jsonObj.trade_price), jsonObj.source_currency, "SINT", dateformat(new Date(jsonObj.trade_date_time), "yyyymmdd"), dateformat(new Date(jsonObj.trade_date_time_gmt), "yyyymmdd-HH:MM:ss.l"), 1, [new TrdCapRptSideGrp("3")], 1, 11);
            let headerService = new HeaderServiceService();
            let tcrheader = await headerService.getHeader("AE");
            var msg = {};
            await tcrheader.converter().then((data) => {
                msg["header"] = data;
            });
            await tcr_obj.getTags().then((data) => {
                msg["tags"] = data;
            });
            await tcr_obj.getGroups().then(async (data) => {
                msg["groups"] = data;
                var memoryMapService = new MemoryMapService();
                memoryMapService.UpdateMap(hashMap.TCR_Map, tcr_obj, false);
                await quickfix_client.send(msg, async (msg) => {
                });
            });


        });
        setTimeout(()=>{
            this.setXMLFile();
        },10000)
        // this.setXMLFile();
    }
    setXMLFile() {
        fs.readFile(filename, function (err, data) {
            if (err) throw err;
            let client = redis.createClient({
                host: "127.0.0.1",
                port: "6379"
            });
            client.publish('tcr_xml', data);
        });
    }
}
        // this.client.get(filename, function (err, reply) {
        //     if (err) {
        //         console.log(" Error in Redis ", err);
        //     }
        //     else {
        //         console.log(" reply ", reply);
        //     }
        // });
// }
