import {TradePriceConditionGrp} from "./TradePriceConditionGrp.dto";
import {RootParties} from "./RootParties.dto";
import {instrument} from "./Instrument.dto";
import {TrdRegTimestamps} from "./TrdRegTimestamps.dto";
import {TrdCapRptSideGrp} from "./TrdCapRptSideGrp.dto";
import {TrdRegPublicationGrp} from "./TrdRegPublicationGrp.dto";

export class TCR_class
{
    TradeID : string;
    SecondaryTradeID?: string;
    PackageID?: string;
    TradeNumber?: number;
    TradeReportType : number;
    TrdRptStatus?: number;
    TrdType?: number;
    TrdSubType?: number;
    SecondaryTrdType?: number;
       
        
        TradePriceConditionGrp?:TradePriceConditionGrp; //Group
        
        TotNumTradeReports?:number;
        PriceType:number;
        
        RootParties:RootParties; //Group

        VenueType:string;

        instrument:instrument; //Group

        QtyType?:number;

        LastQty:number;
        LastPx:number;
        Currency:any;
        LastMkt:string;
        TradeDate:string;
        TransactTime:string;

        TrdRegTimestamps?:TrdRegTimestamps; //Group
        TrdCapRptSideGrp:TrdCapRptSideGrp; //Group
        TrdRegPublicationGrp?:TrdRegPublicationGrp //Group

        ClearingIntention:number;
        RegulatoryReportType:number;
        
        


    constructor(TradeId : string, TradeReportType : number, PriceType : number, RootParties : RootParties, VenueType : string, instrument : instrument, LastQty : number, LastPx : number, Currency : any, LastMkt : string, TradeDate : string, TransactTime : string, TrdCapRptSideGrp : TrdCapRptSideGrp, ClearingIntention : number, RegulatoryReportType : number)
    {
        this.TradeID = TradeId;
        this.TradeReportType = TradeReportType;
        this.PriceType = PriceType;

        this.RootParties = RootParties;

        this.VenueType = VenueType;

        this.instrument = instrument;

        this.LastQty = LastQty;
        this.LastPx = LastPx;
        this.Currency = Currency;
        this.LastMkt = LastMkt;
        this.TradeDate = TradeDate;
        this.TransactTime = TransactTime;
        this.TrdCapRptSideGrp = TrdCapRptSideGrp;
        this.ClearingIntention = ClearingIntention;
        this.RegulatoryReportType = RegulatoryReportType;
    }
// constructor()
// {
        
// }
    converter() {
        var obj = {};
        if (this.TradeID != undefined) {
            obj["1003"] = this.TradeID;
        }
        if (this.SecondaryTradeID != undefined) {
            obj["1040"] = this.SecondaryTradeID;
        }
        if (this.PackageID != undefined) {
            obj["2489"] = this.PackageID;
        }
        if (this.TradeNumber != undefined) {
            obj["2490"] = this.TradeNumber;
        }
        if (this.TradeReportType != undefined) {
            obj["856"] = this.TradeReportType;
        }
        if (this.TrdType != undefined) {
            obj["828"] = this.TrdType;
        }
        if (this.TrdSubType != undefined) {
            obj["829"] = this.TrdSubType;
        }
        if (this.SecondaryTrdType != undefined) {
            obj["855"] = this.SecondaryTrdType;
        }
        if (this.TradePriceConditionGrp != undefined) {
            if (this.TradePriceConditionGrp.NoTradePriceConditions != undefined) {
                obj["1838"] = this.TradePriceConditionGrp.NoTradePriceConditions;
            }
            if (this.TradePriceConditionGrp.TradePriceCondition != undefined) {
                obj["1839"] = this.TradePriceConditionGrp.TradePriceCondition;
            }
        }
        if (this.TotNumTradeReports) {
            obj["748"] = this.TotNumTradeReports;
        }
        if (this.PriceType) {
            obj["423"] = this.PriceType;
        }
        if (this.RootParties != undefined) {
            if (this.RootParties.NoRootPartyIDs != undefined) {
                obj["1116"] = this.RootParties.NoRootPartyIDs;
            }
            if (this.RootParties.RootPartyID != undefined) {
                obj["1117"] = this.RootParties.RootPartyID;
            }
            if (this.RootParties.RootPartyIDSource != undefined) {
                obj["1118"] = this.RootParties.RootPartyIDSource;
            }
            if (this.RootParties.RootPartyRole != undefined) {
                obj["1119"] = this.RootParties.RootPartyRole;
            }
        }
        if (this.VenueType != undefined) {
            obj["1430"] = this.VenueType;
        }
        if (this.instrument != undefined) {

            if (this.instrument.Symbol != undefined) {
                obj["55"] = this.instrument.Symbol;
            }
            if (this.instrument.SecurityID != undefined) {
                obj["48"] = this.instrument.SecurityID;
            }
            if (this.instrument.SecurityIDSource != undefined) {
                obj["22"] = this.instrument.SecurityIDSource;
            }
            if (this.instrument.SecAltIDGrp != undefined) {
                if (this.instrument.SecAltIDGrp.NoSecurityAltID != undefined) {
                    obj["454"] = this.instrument.SecAltIDGrp.NoSecurityAltID;
                }
                if (this.instrument.SecAltIDGrp.SecurityAltID != undefined) {
                    obj["455"] = this.instrument.SecAltIDGrp.SecurityAltID;
                }
                if (this.instrument.SecAltIDGrp.SecurityAltIDSource != undefined) {
                    obj["456"] = this.instrument.SecAltIDGrp.SecurityAltIDSource;
                }
            }
            if (this.instrument.MaturityDate != undefined) {
                obj["541"] = this.instrument.MaturityDate;
            }
            if (this.instrument.AssetClass != undefined) {
                obj["1938"] = this.instrument.AssetClass;
            }
            if (this.instrument.AssetSubClass != undefined) {
                obj["1939"] = this.instrument.AssetSubClass;
            }
            if (this.instrument.AssetType != undefined) {
                obj["1940"] = this.instrument.AssetType;
            }
            if (this.instrument.SecondaryAssetGrp != undefined) {
                if (this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses != undefined) {
                    obj["1976"] = this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses;
                }
                if (this.instrument.SecondaryAssetGrp.SecondaryAssetClass != undefined) {
                    obj["1977"] = this.instrument.SecondaryAssetGrp.SecondaryAssetClass;
                }
                if (this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass != undefined) {
                    obj["1978"] = this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass;
                }
                if (this.instrument.SecondaryAssetGrp.SecondaryAssetType != undefined) {
                    obj["1979"] = this.instrument.SecondaryAssetGrp.SecondaryAssetType;
                }
            }
            if (this.instrument.ContractMultiplier != undefined) {
                obj["231"] = this.instrument.ContractMultiplier;
            }
            if (this.instrument.UnitOfMeasure != undefined) {
                obj["996"] = this.instrument.UnitOfMeasure;
            }
            if (this.instrument.UnitOfMeasureQty != undefined) {
                obj["1147"] = this.instrument.UnitOfMeasureQty;
            }
            if (this.instrument.UnitOfMeasureCurrency != undefined) {
                obj["1716"] = this.instrument.UnitOfMeasureCurrency;
            }
            if (this.instrument.PutOrCall != undefined) {
                obj["201"] = this.instrument.PutOrCall;
            }
            if (this.instrument.StreamGrp != undefined) {
                if (this.instrument.StreamGrp.StreamNotional != undefined) {
                    obj["40054"] = this.instrument.StreamGrp.StreamNotional;
                }
                if (this.instrument.StreamGrp.StreamCurrency != undefined) {
                    obj["40055"] = this.instrument.StreamGrp.StreamCurrency;
                }
            }

        }
        if (this.LastQty != undefined) {
            obj["32"] = this.LastQty;
        }
        if (this.LastPx != undefined) {
            obj["31"] = this.LastPx;
        }
        if (this.Currency != undefined) {
            obj["15"] = this.Currency;
        }
        if (this.LastMkt != undefined) {
            obj["30"] = this.LastMkt;
        }
        if (this.TradeDate != undefined) {
            obj["75"] = this.TradeDate;
        }
        if (this.TransactTime != undefined) {
            obj["60"] = this.TransactTime;
        }
        if (this.TrdRegTimestamps != undefined) {
            if (this.TrdRegTimestamps.NoTrdRegTimestamps != undefined) {
                obj["768"] = this.TrdRegTimestamps.NoTrdRegTimestamps;
            }
            if (this.TrdRegTimestamps.TrdRegTimestamp != undefined) {
                obj["769"] = this.TrdRegTimestamps.TrdRegTimestamp;
            }
            if (this.TrdRegTimestamps.TrdRegTimestampType != undefined) {
                obj["770"] = this.TrdRegTimestamps.TrdRegTimestampType;
            }

        }
        if (this.TrdCapRptSideGrp != undefined) {
            if (this.TrdCapRptSideGrp.NoSides != undefined) {
                obj["552"] = this.TrdCapRptSideGrp.NoSides;
            }
            if (this.TrdCapRptSideGrp.Side != undefined) {
                obj["54"] = this.TrdCapRptSideGrp.Side;
            }
            if (this.TrdCapRptSideGrp.LastCapacity != undefined) {
                obj["29"] = this.TrdCapRptSideGrp.LastCapacity;
            }
            if (this.TrdCapRptSideGrp.Parties != undefined) {
                if (this.TrdCapRptSideGrp.Parties.NoPartyIDs != undefined) {
                    obj["453"] = this.TrdCapRptSideGrp.Parties.NoPartyIDs;
                }
                if (this.TrdCapRptSideGrp.Parties.PartyID != undefined) {
                    obj["448"] = this.TrdCapRptSideGrp.Parties.PartyID;
                }
                if (this.TrdCapRptSideGrp.Parties.PartyIDSource != undefined) {
                    obj["447"] = this.TrdCapRptSideGrp.Parties.PartyIDSource;
                }
                if (this.TrdCapRptSideGrp.Parties.PartyRole != undefined) {
                    obj["452"] = this.TrdCapRptSideGrp.Parties.PartyRole;
                }

            }
        }
        if (this.TrdRegPublicationGrp != undefined) {
            if (this.TrdRegPublicationGrp.NoTrdRegPublications != undefined) {
                obj["2668"] = this.TrdRegPublicationGrp.NoTrdRegPublications;
            }
            if (this.TrdRegPublicationGrp.TrdRegPublicationType != undefined) {
                obj["2669"] = this.TrdRegPublicationGrp.TrdRegPublicationType;
            }
            if (this.TrdRegPublicationGrp.TrdRegPublicationReason != undefined) {
                obj["2670"] = this.TrdRegPublicationGrp.TrdRegPublicationReason;
            }
        }

        if (this.ClearingIntention != undefined) {
            obj["1924"] = this.ClearingIntention;
        }
        if (this.RegulatoryReportType != undefined) {
            obj["1934"] = this.RegulatoryReportType
        }
        return obj;
    }
}
