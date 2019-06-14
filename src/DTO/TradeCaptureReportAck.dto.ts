import { of } from "rxjs";
import { HeaderServiceService } from "src/common-services/header-service/header-service.service";
import { DatabaseServiceService } from "src/database-connection/database-service/database-service.service";
import {  getConnection } from "typeorm";

export class TradeCaptureReportAck
{
    TradeID : number;
    SecondaryTradeID : string;
    TradeReportType : number;
    TrdRptStatus : number;
    TrdType?: number;
    TradeReportRejectReason?: number;
    RejectText?: string;
    WarningText : string;
    TCRHeaderService:HeaderServiceService=null;
    DatabaseService:DatabaseServiceService=null;
    constructor(){
        if(this.TCRHeaderService==null)
        this.TCRHeaderService=new HeaderServiceService();
        if(this.DatabaseService==null)
        this.DatabaseService=new DatabaseServiceService(getConnection('default'));
    }
    converter()
    {
        var obj = {
            tags: {}
        };
        if (this.TradeID != undefined) {
            obj.tags["1003"] = this.TradeID;
        }
        if (this.SecondaryTradeID != undefined) {
            obj.tags["1040"] = this.SecondaryTradeID;
        }
        if (this.TradeReportType != undefined) {
            obj.tags["856"] = this.TradeReportType;
        }
        if (this.TrdRptStatus != undefined) {
            obj.tags["939"] = this.TrdRptStatus;
        }
        if (this.TrdType != undefined) {
            obj.tags["828"] = this.TrdType;
        }
        if (this.TradeReportRejectReason != undefined) {
            obj.tags["751"] = this.TradeReportRejectReason;
        }
        if (this.RejectText != undefined) {
            obj.tags["1328"] = this.RejectText;
        }
        if (this.WarningText != undefined) {
            obj.tags["2520"] = this.WarningText;
        }
        return obj;
    }
    convertJSON(){
        var obj={
            header:this.TCRHeaderService.getHeader("AR"),
            tags:this.converter()
        };
        return obj;
    }
    convertToField(message:any)
    {
        var obj:TradeCaptureReportAck;
        obj=new TradeCaptureReportAck();
        if(message.tags["1003"]!=undefined){
            obj.TradeID=message.tags["1003"];
        }
        if(message.tags["1040"]!=undefined){
            obj.SecondaryTradeID=message.tags["1040"];
        }
        if(message.tags["856"]!=undefined){
            obj.TradeReportType=message.tags["856"];
        }
        if(message.tags["939"]!=undefined){
            obj.TrdRptStatus=message.tags["939"];
        }
        if(message.tags["828"]!=undefined){
            obj.TrdType=message.tags["828"];
        }
        if(message.tags["751"]!=undefined){
            obj.TradeReportRejectReason=message.tags["751"];
        }
        if(message.tags["1328"]!=undefined){
            obj.RejectText=message.tags["1328"];
        }
        if(message.tags["2520"]!=undefined){
            obj.WarningText=message.tags["2520"];
        }
        return obj;
    }
    submitToDatabase(time:any,time_type:number){
        // let databaseService=new DatabaseServiceService();
        this.DatabaseService.insertTCRAck(this.TradeID,
            this.SecondaryTradeID,
            this.TrdRptStatus,
            time,time_type,null,this.TradeReportRejectReason,this.RejectText,this.WarningText,"",0,"");
    }
}