import { TradePriceConditionGrp } from "./TradePriceConditionGrp.dto";
import { RootParties } from "./RootParties.dto";
import { instrument } from "./Instrument.dto";
import { TrdRegTimestamps } from "./TrdRegTimestamps.dto";
import { TrdCapRptSideGrp } from "./TrdCapRptSideGrp.dto";
import { TrdRegPublicationGrp } from "./TrdRegPublicationGrp.dto";

export interface TCRAllFields{
    TradeReportRejectReason?: number;
    RejectText?: string;
    WarningText? : string;
    TradeID?: number;
    SecondaryTradeID?: string;
    PackageID?: string;
    TradeNumber?: number;
    TradeReportType: number;
    TrdRptStatus?: string;
    TrdType?: number;
    TrdSubType?: number;
    SecondaryTrdType?: number;
    TradePriceConditionGrp?: TradePriceConditionGrp[]; //Group  --
    NoTradePriceConditions?: number; //--
    TotNumTradeReports?: number;
    PriceType?: string;
    RootParties?: RootParties[]; //Group     --
    NoRootPartyIDs?: number; //--
    VenueType?: string;
    instrument: instrument; //Group
    QtyType?: number;
    LastQty?: number;
    LastPx?: number;
    Currency?: any;
    LastMkt?: string;
    TradeDate?: string;
    TransactTime?: string;
    TrdRegTimestamps?: TrdRegTimestamps[]; //Group
    NoTrdRegTimestamps?: number //--
    TrdCapRptSideGrp?: TrdCapRptSideGrp[]; //Group
    NoSides?: number; //--
    TrdRegPublicationGrp?: TrdRegPublicationGrp[]; //Group
    NoTrdRegPublications?: number; //--
    ClearingIntention?: number;
    RegulatoryReportType?: number;
    TradePublishIndicator?: number
}