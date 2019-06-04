export class TradeCaptureReportAck
{
    TradeID : string;
    SecondaryTradeID : string;
    TradeReportType : number;
    TrdRptStatus : number;
    TrdType?: number;
    TradeReportRejectReason?: number;
    RejectText?: string;
    WarningText : string;

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
}