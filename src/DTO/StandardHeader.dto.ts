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
    constructor(Begins:string,BodyL:number,MsgT:string,SenderComp:string,TargetC:string,MsgSeq:number){
        this.BeginString=Begins;
        this.BodyLength=BodyL;
        this.SenderCompID=SenderComp;
        this.TargetCompID=TargetC;
        this.MsgSeqNum=MsgSeq;
    }
    convertToTags()
    {
        var obj={
            tags:{
                "8":this.BeginString,
                "9":this.BodyLength,
                "35":this.MsgType,
                "49":this.SenderCompID,
                "56":this.TargetCompID,
                "34":this.MsgSeqNum,
                "43":this.PossDupFlag,
                "570":this.PreviouslyReported,
                "97":this.PossResend,
                "52":this.SendingTime,
            }
        };
        return obj;
    }
}