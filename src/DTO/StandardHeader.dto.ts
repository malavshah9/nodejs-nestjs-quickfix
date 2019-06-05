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
        var obj = {};
        if (this.BeginString != undefined) {
            obj["8"] = this.BeginString;
        }
        if (this.BodyLength != undefined) {
            obj["9"] = this.BodyLength;
        }
        if (this.MsgType != undefined) {
            obj["35"] = this.MsgType;
        }
        if (this.SenderCompID != undefined) {
            obj["49"] = this.SenderCompID;
        }
        if (this.TargetCompID != undefined) {
            obj["56"] = this.TargetCompID;
        }
        if (this.MsgSeqNum != undefined) {
            obj["34"] = this.MsgSeqNum;
        }
        if (this.PossDupFlag != undefined) {
            obj["43"] = this.PossDupFlag;
        }
        if (this.PreviouslyReported != undefined) {
            obj["570"] = this.PreviouslyReported;
        }
        if (this.PossResend != undefined) {
            obj["97"] = this.PossResend;
        }
        if (this.SendingTime != undefined) {
            obj["52"] = this.SendingTime;
        }
        return obj;
    }
}
