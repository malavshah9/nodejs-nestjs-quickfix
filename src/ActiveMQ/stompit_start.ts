import { MemoryMapService } from './../memory-map-service/memory-map.service';
import { HeaderServiceService } from './../common-services/header-service/header-service.service';
import { RootParties } from './../DTO/RootParties.dto';
import { Parties } from './../DTO/Parties.dto';
import { TrdCapRptSideGrp } from './../DTO/TrdCapRptSideGrp.dto';
import { instrument } from './../DTO/Instrument.dto';
import { TCR_class } from './../DTO/TCR_class.dto';
import { stompit, connectParams, reconnectOptions } from './stompit_server';
import { Inject } from '@nestjs/common';

var hashMap = require('../memory-map-service/memory-store.js');
var dateformat = require('dateformat');
var parser = require('fast-xml-parser');
var he = require('he');
var fs = require('fs');
var path = require('path');

export class stomp_it {
    readonly connectionManager: any = new stompit.ConnectFailover([connectParams], reconnectOptions);
    constructor() { }
    /*
        startConnectionStompit() function will start the stompit server
        set the callback method which will be called when content in the topic are added.
    */
    async startConnectionStompit(quickfix_client: any) {
        //  start activemq server and visit
        //  http://localhost:8161/admin/
        //  this.quickfix_client=await new AppService().getQuickfixClient();
        await this.connectionManager.connect(async function (err, client, reconnect) {
            if (err) {
                console.log("Error in connecting to ActiveMQ server", err);
            }
            var Params = {
                'destination': '/topic/xml_topic',
                'ack': 'auto',
                'persistent': true
            };
            client.subscribe(Params, async function (err, message) {
                var options = {
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
                if (err) {
                    console.log("Error inpm install --save node-xml-streamn topic subscribed", err);
                }
                var read = async function () {
                    var chunk;
                    var xml_message = "";
                    while (null !== (chunk = message.read())) {
                        xml_message += chunk.toString();
                        // process.stdout.write(chunk);
                    }
                    if (parser.validate(xml_message) === true) {
                        //optional (it'll return an object in case it's not valid)
                        var jsonObj = parser.parse(xml_message, options);
                        let tcr_obj = new TCR_class(jsonObj.trade_number + "", 5, "2", 1, [new RootParties(15, "G", 3)], new instrument("0", jsonObj.security_id, "4"), parseInt(jsonObj.trade_volume), parseInt(jsonObj.trade_price), jsonObj.source_currency, "SINT", dateformat(new Date(jsonObj.trade_date_time), "yyyymmdd"), dateformat(new Date(jsonObj.trade_date_time_gmt), "yyyymmdd-HH:MM:ss.l"), 1, [new TrdCapRptSideGrp("3")], 1, 11);
                        // console.log(" tcr_obj made is ",tcr_obj);
                        let headerService = new HeaderServiceService();
                        let tcrheader = await headerService.getHeader("AE");
                        var msg = {
                            header: await tcrheader.converter(),
                            tags: tcr_obj.getTags(),
                            groups: tcr_obj.getGroups()
                        };
                        msg.tags["22"] = '4';
                        msg.tags["48"] = "0X1213";
                        msg.tags["55"] = "BAC";
                        // console.log(" TCR Report made with XML parsing ", msg);
                        var memoryMapService = new MemoryMapService();
                        memoryMapService.UpdateMap(hashMap.TCR_Map, tcr_obj, false);
                        quickfix_client.send(msg, async (msg) => { });
                    }
                    message.ack();
                };
                message.on('readable', read);
            });
        });
        await this.stompConnectionXML();
    }
    /*
        This function will read the XML file in the same folder named  "demo_xml.xml" and send to server.
    */
    stompConnectionXML() {
        this.connectionManager.connect(function (err, client, reconnect) {
            if (err) {
                console.log("Error in connecting to ActiveMQ server", err);
            }
            var filename = path.dirname(module.filename) + '/demo_xml.xml';
            fs.readFile(filename, function (err, data) {
                if (err) {
                    console.log("Error in reading file");
                }
                else {
                    var xmlsendParams = {
                        'destination': '/topic/xml_topic',
                        'content-type': 'text/xml',
                        'persistent': true
                    };
                    var fram2 = client.send(xmlsendParams);
                    fram2.write(data);
                    fram2.end();
                }
            });
        });
    }
}