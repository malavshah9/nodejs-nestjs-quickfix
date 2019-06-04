import { Injectable } from '@nestjs/common';
import { StandardHeader } from 'src/DTO/StandardHeader.dto';
var PropertiesReader = require('properties-reader');


@Injectable()
export class HeaderServiceService {
    msgSeqNumTCR:number=0;
    msgSeqNumTCRAck:number=0;
    ObjTradeCaptureReportHeader:StandardHeader;
    ObjTradeCaptureReportAckHeader:StandardHeader;
    propertiesFile:any;
    constructor(){
        this.propertiesFile = PropertiesReader('quickfix_examples/initiator.properties');
        this.ObjTradeCaptureReportAckHeader=null;
        this.ObjTradeCaptureReportHeader=null;
    }
    // AE:TradeCaptureREPORT
    // AR:TradeCaptureReportAck
    getHeader(MessageType:string){
        if(MessageType=="AE"){
            if(this.ObjTradeCaptureReportHeader==null){
                this.ObjTradeCaptureReportHeader=new StandardHeader();
                this.ObjTradeCaptureReportHeader.BeginString=this.propertiesFile.get('SESSION.BeginString');
                this.ObjTradeCaptureReportHeader.MsgType="AE";
                this.ObjTradeCaptureReportHeader.SenderCompID=this.propertiesFile.get('SESSION.SenderCompID');
                this.ObjTradeCaptureReportHeader.TargetCompID=this.propertiesFile.get('SESSION.TargetCompID');
                this.ObjTradeCaptureReportHeader.MsgSeqNum = this.msgSeqNumTCR++;
            }
            else{
                this.ObjTradeCaptureReportHeader.MsgSeqNum = this.msgSeqNumTCR++;
            }
            return this.ObjTradeCaptureReportHeader;
        }
        else{
            if(this.ObjTradeCaptureReportAckHeader==null){
                this.ObjTradeCaptureReportAckHeader=new StandardHeader();
                this.ObjTradeCaptureReportAckHeader.BeginString=this.propertiesFile.get('SESSION.BeginString');
                this.ObjTradeCaptureReportAckHeader.MsgType="AR";
                this.ObjTradeCaptureReportAckHeader.SenderCompID=this.propertiesFile.get('SESSION.TargetCompID');
                this.ObjTradeCaptureReportAckHeader.TargetCompID=this.propertiesFile.get('SESSION.SenderCompID');
                this.ObjTradeCaptureReportAckHeader.MsgSeqNum = this.msgSeqNumTCRAck++;
            }
            else{
                this.ObjTradeCaptureReportAckHeader.MsgSeqNum = this.msgSeqNumTCRAck++;
            }
            return this.ObjTradeCaptureReportAckHeader;
        }
    }
}
