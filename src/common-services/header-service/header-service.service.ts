import { Injectable } from '@nestjs/common';
import { StandardHeader } from '../../DTO/StandardHeader.dto';
var PropertiesReader = require('properties-reader');
@Injectable()
export class HeaderServiceService {
    msgSeqNumTCR: number = 0;
    msgSeqNumTCRAck: number = 0;
    ObjTradeCaptureReportHeader: StandardHeader;
    ObjTradeCaptureReportAckHeader: StandardHeader;
    propertiesFile: any;
    constructor() {
        this.propertiesFile = PropertiesReader('quickfix_examples/initiator.properties');
        this.ObjTradeCaptureReportAckHeader = null;
        this.ObjTradeCaptureReportHeader = null;
    }
    /*
        This function used to get the header according to message type given as arguement.
        This function will be configured to give header for two message types called as 
        1.AE:TradeCaptureREPORT
        2.AR:TradeCaptureReportAck
    */
    async getHeader(MessageType: string) {
        if (MessageType == "AE") {
            if (this.ObjTradeCaptureReportHeader == null) {
                this.ObjTradeCaptureReportHeader = new StandardHeader();
                this.ObjTradeCaptureReportHeader.BeginString = this.propertiesFile.get('SESSION.BeginString');
                this.ObjTradeCaptureReportHeader.MsgType = "AE";
                this.ObjTradeCaptureReportHeader.SenderCompID = this.propertiesFile.get('SESSION.SenderCompID');
                this.ObjTradeCaptureReportHeader.TargetCompID = this.propertiesFile.get('SESSION.TargetCompID');
            }
            else {
                this.ObjTradeCaptureReportHeader.MsgSeqNum = this.msgSeqNumTCR++;
            }
            return this.ObjTradeCaptureReportHeader;
        }
        else {
            if (this.ObjTradeCaptureReportAckHeader == null) {
                this.ObjTradeCaptureReportAckHeader = new StandardHeader();
                this.ObjTradeCaptureReportAckHeader.BeginString = this.propertiesFile.get('SESSION.BeginString');
                this.ObjTradeCaptureReportAckHeader.MsgType = "AR";
                this.ObjTradeCaptureReportAckHeader.SenderCompID = this.propertiesFile.get('SESSION.TargetCompID');
                this.ObjTradeCaptureReportAckHeader.TargetCompID = this.propertiesFile.get('SESSION.SenderCompID');
            }
            else {
                this.ObjTradeCaptureReportAckHeader.MsgSeqNum = this.msgSeqNumTCRAck++;
            }
            return this.ObjTradeCaptureReportAckHeader;
        }
    }
}
