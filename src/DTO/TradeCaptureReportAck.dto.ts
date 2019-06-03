export class TradeCaptureReportAck
{
    TradeID:string;
    SecondaryTradeID:string;
    TradeReportType:number;
    TrdRptStatus:number;
    TrdType?:number;
    TradeReportRejectReason?:number;
    RejectText?:string;
    WarningText:string;

    convertToTags()
    {
        var obj={
            tags:{
                "1003":this.TradeID,
                "1040":this.SecondaryTradeID,
                "856":this.TradeReportType,
                "939":this.TrdRptStatus,
                "828":this.TrdType,
                "751":this.TradeReportRejectReason,
                "1328":this.RejectText,
                "2520":this.WarningText
            }
        };
        return obj;
    }
}