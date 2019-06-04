var PropertiesReader = require('properties-reader');

export class StandardHeader
{
    BeginString:string;
    BodyLength:number;
    MsgType:string;
    SenderCompID:string;
    TargetCompID:string;
    MsgSeqNum:number;
    PossDupFlag?:boolean;
    PreviouslyReported?:boolean;
    PossResend?:boolean;
    SendingTime:string;
    constructor(){
        
    }
    converter() {
        var obj = {
            tags: {}
        };
        if (this.BeginString != undefined) {
            obj.tags["8"] = this.BeginString;
        }
        if (this.BodyLength != undefined) {
            obj.tags["9"] = this.BodyLength;
        }
        if (this.MsgType != undefined) {
            obj.tags["35"] = this.MsgType;
        }
        if (this.SenderCompID != undefined) {
            obj.tags["49"] = this.SenderCompID;
        }
        if (this.TargetCompID != undefined) {
            obj.tags["56"] = this.TargetCompID;
        }
        if (this.MsgSeqNum != undefined) {
            obj.tags["34"] = this.MsgSeqNum;
        }
        if (this.PossDupFlag != undefined) {
            obj.tags["43"] = this.PossDupFlag;
        }
        if (this.PreviouslyReported != undefined) {
            obj.tags["570"] = this.PreviouslyReported;
        }
        if (this.PossResend != undefined) {
            obj.tags["97"] = this.PossResend;
        }
        if (this.SendingTime != undefined) {
            obj.tags["52"] = this.SendingTime;
        }
        return obj;
    }
}
