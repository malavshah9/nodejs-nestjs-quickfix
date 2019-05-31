import { TradePriceConditionGrp } from "./TradePriceConditionGrp.dto";
import { RootParties } from "./RootParties.dto";

export interface TCR_class
{
        TradeID:string,
        SecondaryTradeID?:string,
        PackageID?:string,
        TradeNumber?:number,
        TradeReportType:number,
        TrdRptStatus?:number,
        TrdType?:number,
        TrdSubType?:number,
        SecondaryTrdType?:number,
        
        TradePriceConditionGrp?:TradePriceConditionGrp, //Group
        
        TotNumTradeReports?:number,
        PriceType?:number,
        
        RootParties:RootParties, //Group

        VenueType:string,
        


         
}
