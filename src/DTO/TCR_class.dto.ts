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

    TradePriceConditionGrp?: TradePriceConditionGrp; //Group

    TotNumTradeReports?: number;
    PriceType : number;

    RootParties : RootParties; //Group

    VenueType : string;

    instrument : instrument; //Group

    QtyType?: number;

    LastQty : number;
    LastPx : number;
    Currency : string;
    LastMkt : string;
    TradeDate : string;
    TransactTime : string;

    TrdRegTimestamps?: TrdRegTimestamps; //Group
    TrdCapRptSideGrp : TrdCapRptSideGrp; //Group
    TrdRegPublicationGrp?: TrdRegPublicationGrp //Group

    ClearingIntention : number;
    RegulatoryReportType : number;

    constructor(TradeId : string, TradeReportType : number, PriceType : number, RootParties : RootParties, VenueType : string, instrument : instrument, LastQty : number, LastPx : number, Currency : string, LastMkt : string, TradeDate : string, TransactTime : string, TrdCapRptSideGrp : TrdCapRptSideGrp, ClearingIntention : number, RegulatoryReportType : number)
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
    convertToString()
    {
        var obj = {
            tags: {
                "1003": this.TradeID,
                "1040": this.SecondaryTradeID,
                "2489": this.PackageID,
                "2490": this.TradeNumber,
                "856": this.TradeReportType,
                "828": this.TrdType,
                "829": this.TrdSubType,
                "855": this.SecondaryTrdType,
                "1838": this.TradePriceConditionGrp.NoTradePriceConditions,
                "1839": this.TradePriceConditionGrp.TradePriceCondition,
                "748": this.TotNumTradeReports,
                "423": this.PriceType,
                "1116": this.RootParties.NoRootPartyIDs,
                "1117": this.RootParties.RootPartyID,
                "1118": this.RootParties.RootPartyIDSource,
                "1119": this.RootParties.RootPartyRole,
                "1430": this.VenueType,
                "55": this.instrument.Symbol,
                "48": this.instrument.SecurityID,
                "22": this.instrument.SecurityIDSource,
                "454": this.instrument.SecAltIDGrp.NoSecurityAltID,
                "455": this.instrument.SecAltIDGrp.SecurityAltID,
                "456": this.instrument.SecAltIDGrp.SecurityAltIDSource,
                "541": this.instrument.MaturityDate,
                "1938": this.instrument.AssetClass,
                "1939": this.instrument.AssetSubClass,
                "1940": this.instrument.AssetType,
                "1976": this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses,
                "1977": this.instrument.SecondaryAssetGrp.SecondaryAssetClass,
                "1978": this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass,
                "1979": this.instrument.SecondaryAssetGrp.SecondaryAssetType,
                "231": this.instrument.ContractMultiplier,
                "996": this.instrument.UnitOfMeasure,
                "1147": this.instrument.UnitOfMeasureQty,
                "1716": this.instrument.UnitOfMeasureCurrency,
                "201": this.instrument.PutOrCall,
                "40054": this.instrument.StreamGrp.StreamNotional,
                "40055": this.instrument.StreamGrp.StreamCurrency,
                "32": this.LastQty,
                "31": this.LastPx,
                "15": this.Currency,
                "30": this.LastMkt,
                "75": this.TradeDate,
                "60": this.TransactTime,
                "768": this.TrdRegTimestamps.NoTrdRegTimestamps,
                "769": this.TrdRegTimestamps.TrdRegTimestamp,
                "770": this.TrdRegTimestamps.TrdRegTimestampType,
                "552": this.TrdCapRptSideGrp.NoSides,
                "54": this.TrdCapRptSideGrp.Side,
                "453": this.TrdCapRptSideGrp.Parties.NoPartyIDs,
                "448": this.TrdCapRptSideGrp.Parties.PartyID,
                "447": this.TrdCapRptSideGrp.Parties.PartyIDSource,
                "452": this.TrdCapRptSideGrp.Parties.PartyRole,
                "29": this.TrdCapRptSideGrp.LastCapacity,
                "2668": this.TrdRegPublicationGrp.NoTrdRegPublications,
                "2669": this.TrdRegPublicationGrp.TrdRegPublicationType,
                "2670": this.TrdRegPublicationGrp.TrdRegPublicationReason,
                "1924": this.ClearingIntention,
                "1934": this.RegulatoryReportType
            }
        };
        return obj;
    }
    converter() {
        var obj = {
            tags: {}
        };
        if (this.TradeID != undefined) {
            obj.tags["1003"] = this.TradeID;
        }
        if (this.SecondaryTradeID != undefined) {
            obj.tags["1040"] = this.SecondaryTradeID;
        }
        if (this.PackageID != undefined) {
            obj.tags["2489"] = this.PackageID;
        }
        if (this.TradeNumber != undefined) {
            obj.tags["2490"] = this.TradeNumber;
        }
        if (this.TradeReportType != undefined) {
            obj.tags["856"] = this.TradeReportType;
        }
        if (this.TrdType != undefined) {
            obj.tags["828"] = this.TrdType;
        }
        if (this.TrdSubType != undefined) {
            obj.tags["829"] = this.TrdSubType;
        }
        if (this.SecondaryTrdType != undefined) {
            obj.tags["855"] = this.SecondaryTrdType;
        }
        if (this.TradePriceConditionGrp != undefined) {
            if (this.TradePriceConditionGrp.NoTradePriceConditions != undefined) {
                obj.tags["1838"] = this.TradePriceConditionGrp.NoTradePriceConditions;
            }
            if (this.TradePriceConditionGrp.TradePriceCondition != undefined) {
                obj.tags["1839"] = this.TradePriceConditionGrp.TradePriceCondition;
            }
        }
        if (this.TotNumTradeReports) {
            obj.tags["748"] = this.TotNumTradeReports;
        }
        if (this.PriceType) {
            obj.tags["423"] = this.PriceType;
        }
        if (this.RootParties != undefined) {
            if (this.RootParties.NoRootPartyIDs != undefined) {
                obj.tags["1116"] = this.RootParties.NoRootPartyIDs;
            }
            if (this.RootParties.RootPartyID != undefined) {
                obj.tags["1117"] = this.RootParties.RootPartyID;
            }
            if (this.RootParties.RootPartyIDSource != undefined) {
                obj.tags["1118"] = this.RootParties.RootPartyIDSource;
            }
            if (this.RootParties.RootPartyRole != undefined) {
                obj.tags["1119"] = this.RootParties.RootPartyRole;
            }
        }
        if (this.VenueType != undefined) {
            obj.tags["1430"] = this.VenueType;
        }
        if (this.instrument != undefined) {

            if (this.instrument.Symbol != undefined) {
                obj.tags["55"] = this.instrument.Symbol;
            }
            if (this.instrument.SecurityID != undefined) {
                obj.tags["48"] = this.instrument.SecurityID;
            }
            if (this.instrument.SecurityIDSource != undefined) {
                obj.tags["22"] = this.instrument.SecurityIDSource;
            }
            if (this.instrument.SecAltIDGrp != undefined) {
                if (this.instrument.SecAltIDGrp.NoSecurityAltID != undefined) {
                    obj.tags["454"] = this.instrument.SecAltIDGrp.NoSecurityAltID;
                }
                if (this.instrument.SecAltIDGrp.SecurityAltID != undefined) {
                    obj.tags["455"] = this.instrument.SecAltIDGrp.SecurityAltID;
                }
                if (this.instrument.SecAltIDGrp.SecurityAltIDSource != undefined) {
                    obj.tags["456"] = this.instrument.SecAltIDGrp.SecurityAltIDSource;
                }
            }
            if (this.instrument.MaturityDate != undefined) {
                obj.tags["541"] = this.instrument.MaturityDate;
            }
            if (this.instrument.AssetClass != undefined) {
                obj.tags["1938"] = this.instrument.AssetClass;
            }
            if (this.instrument.AssetSubClass != undefined) {
                obj.tags["1939"] = this.instrument.AssetSubClass;
            }
            if (this.instrument.AssetType != undefined) {
                obj.tags["1940"] = this.instrument.AssetType;
            }
            if (this.instrument.SecondaryAssetGrp != undefined) {
                if (this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses != undefined) {
                    obj.tags["1976"] = this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses;
                }
                if (this.instrument.SecondaryAssetGrp.SecondaryAssetClass != undefined) {
                    obj.tags["1977"] = this.instrument.SecondaryAssetGrp.SecondaryAssetClass;
                }
                if (this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass != undefined) {
                    obj.tags["1978"] = this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass;
                }
                if (this.instrument.SecondaryAssetGrp.SecondaryAssetType != undefined) {
                    obj.tags["1979"] = this.instrument.SecondaryAssetGrp.SecondaryAssetType;
                }
            }
            if (this.instrument.ContractMultiplier != undefined) {
                obj.tags["231"] = this.instrument.ContractMultiplier;
            }
            if (this.instrument.UnitOfMeasure != undefined) {
                obj.tags["996"] = this.instrument.UnitOfMeasure;
            }
            if (this.instrument.UnitOfMeasureQty != undefined) {
                obj.tags["1147"] = this.instrument.UnitOfMeasureQty;
            }
            if (this.instrument.UnitOfMeasureCurrency != undefined) {
                obj.tags["1716"] = this.instrument.UnitOfMeasureCurrency;
            }
            if (this.instrument.PutOrCall != undefined) {
                obj.tags["201"] = this.instrument.PutOrCall;
            }
            if (this.instrument.StreamGrp != undefined) {
                if (this.instrument.StreamGrp.StreamNotional != undefined) {
                    obj.tags["40054"] = this.instrument.StreamGrp.StreamNotional;
                }
                if (this.instrument.StreamGrp.StreamCurrency != undefined) {
                    obj.tags["40055"] = this.instrument.StreamGrp.StreamCurrency;
                }
            }

        }
        if (this.LastQty != undefined) {
            obj.tags["32"] = this.LastQty;
        }
        if (this.LastPx != undefined) {
            obj.tags["31"] = this.LastPx;
        }
        if (this.Currency != undefined) {
            obj.tags["15"] = this.Currency;
        }
        if (this.LastMkt != undefined) {
            obj.tags["30"] = this.LastMkt;
        }
        if (this.TradeDate != undefined) {
            obj.tags["75"] = this.TradeDate;
        }
        if (this.TransactTime != undefined) {
            obj.tags["60"] = this.TransactTime;
        }
        if (this.TrdRegTimestamps != undefined) {
            if (this.TrdRegTimestamps.NoTrdRegTimestamps != undefined) {
                obj.tags["768"] = this.TrdRegTimestamps.NoTrdRegTimestamps;
            }
            if (this.TrdRegTimestamps.TrdRegTimestamp != undefined) {
                obj.tags["769"] = this.TrdRegTimestamps.TrdRegTimestamp;
            }
            if (this.TrdRegTimestamps.TrdRegTimestampType != undefined) {
                obj.tags["770"] = this.TrdRegTimestamps.TrdRegTimestampType;
            }

        }
        if (this.TrdCapRptSideGrp != undefined) {
            if (this.TrdCapRptSideGrp.NoSides != undefined) {
                obj.tags["552"] = this.TrdCapRptSideGrp.NoSides;
            }
            if (this.TrdCapRptSideGrp.Side != undefined) {
                obj.tags["54"] = this.TrdCapRptSideGrp.Side;
            }
            if (this.TrdCapRptSideGrp.LastCapacity != undefined) {
                obj.tags["29"] = this.TrdCapRptSideGrp.LastCapacity;
            }
            if (this.TrdCapRptSideGrp.Parties != undefined) {
                if (this.TrdCapRptSideGrp.Parties.NoPartyIDs != undefined) {
                    obj.tags["453"] = this.TrdCapRptSideGrp.Parties.NoPartyIDs;
                }
                if (this.TrdCapRptSideGrp.Parties.PartyID != undefined) {
                    obj.tags["448"] = this.TrdCapRptSideGrp.Parties.PartyID;
                }
                if (this.TrdCapRptSideGrp.Parties.PartyIDSource != undefined) {
                    obj.tags["447"] = this.TrdCapRptSideGrp.Parties.PartyIDSource;
                }
                if (this.TrdCapRptSideGrp.Parties.PartyRole != undefined) {
                    obj.tags["452"] = this.TrdCapRptSideGrp.Parties.PartyRole;
                }

            }
        }
        if (this.TrdRegPublicationGrp != undefined) {
            if (this.TrdRegPublicationGrp.NoTrdRegPublications != undefined) {
                obj.tags["2668"] = this.TrdRegPublicationGrp.NoTrdRegPublications;
            }
            if (this.TrdRegPublicationGrp.TrdRegPublicationType != undefined) {
                obj.tags["2669"] = this.TrdRegPublicationGrp.TrdRegPublicationType;
            }
            if (this.TrdRegPublicationGrp.TrdRegPublicationReason != undefined) {
                obj.tags["2670"] = this.TrdRegPublicationGrp.TrdRegPublicationReason;
            }
        }

        if (this.ClearingIntention != undefined) {
            obj.tags["1924"] = this.ClearingIntention;
        }
        if (this.RegulatoryReportType != undefined) {
            obj.tags["1934"] = this.RegulatoryReportType
        }
        return obj;
    }
}
