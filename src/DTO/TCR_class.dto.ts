
import { RootParties } from "./RootParties.dto";
import { instrument } from "./Instrument.dto";
import { TrdRegTimestamps } from "./TrdRegTimestamps.dto";
import { TrdCapRptSideGrp } from "./TrdCapRptSideGrp.dto";
import { TrdRegPublicationGrp } from "./TrdRegPublicationGrp.dto";
import { Inject } from "@nestjs/common";
import { MemoryMapService } from "../memory-map-service/memory-map.service";
import { TradePriceConditionGrp } from "./TradePriceConditionGrp.dto";
import { SecAltIDGrp } from "./SecAltIDGrp.dto";
import { SecondaryAssetGrp } from "./SecondaryAssetGrp.dto";

export class TCR_class {
    TradeID: string;
    SecondaryTradeID?: string;
    PackageID?: string;
    TradeNumber?: number;
    TradeReportType: number;
    TrdRptStatus?: number;
    TrdType?: number;
    TrdSubType?: number;
    SecondaryTrdType?: number;
    TradePriceConditionGrp?: TradePriceConditionGrp[]; //Group  --
    NoTradePriceConditions?: number; //--
    TotNumTradeReports?: number;
    PriceType: string;
    RootParties: RootParties[]; //Group     --
    NoRootPartyIDs: number; //--
    VenueType?: string;
    instrument: instrument; //Group
    QtyType?: number;
    LastQty: number;
    LastPx: number;
    Currency: any;
    LastMkt: string;
    TradeDate: string;
    TransactTime: string;
    TrdRegTimestamps?: TrdRegTimestamps[]; //Group
    NoTrdRegTimestamps?: number //--
    TrdCapRptSideGrp: TrdCapRptSideGrp[]; //Group
    NoSides: number; //--
    TrdRegPublicationGrp?: TrdRegPublicationGrp[]; //Group
    NoTrdRegPublications?: number; //--
    ClearingIntention: number;
    RegulatoryReportType: number;
    TradePublishIndicator: number
    tagObj: any;
    tagGrp: any[] = [];
    constructor(TradeId: string, TradeReportType: number, PriceType: string, NoRootPartyIDs: number, RootParties: RootParties[], instrument: instrument, LastQty: number, LastPx: number, Currency: any, LastMkt: string, TradeDate: string, TransactTime: string, NoSides: number, TrdCapRptSideGrp: TrdCapRptSideGrp[], ClearingIntention: number, RegulatoryReportType: number,
        SecondaryTradeID?: string, PackageID?: string, TradeNumber?: number, TrdRptStatus?: number, TrdType?: number,
        TrdSubType?: number, SecondaryTrdType?: number, TradePriceConditionGrp?: TradePriceConditionGrp[],
        NoTradePriceConditions?: number, TotNumTradeReports?: number, VenueType?: string, QtyType?: number,
        TrdRegTimestamps?: TrdRegTimestamps[], NoTrdRegTimestamps?: number,
        TrdRegPublicationGrp?: TrdRegPublicationGrp[], NoTrdRegPublications?: number, TradePublishIndicator?: number) {
        if (TradePublishIndicator != undefined) {
            this.TradePublishIndicator = TradePublishIndicator;
        }
        if (TradeId != undefined) {
            this.TradeID = TradeId;
        }
        if (TradeReportType != undefined) {
            this.TradeReportType = TradeReportType;
        }
        if (PriceType != undefined) {
            this.PriceType = PriceType;
        }
        if (RootParties != undefined) {
            this.RootParties = RootParties;
        }
        if (NoRootPartyIDs != undefined) {
            this.NoRootPartyIDs = NoRootPartyIDs;
        }
        if (VenueType != undefined) {
            this.VenueType = VenueType;
        }
        if (instrument != undefined) {
            this.instrument = instrument;
        }
        if (LastQty != undefined) {
            this.LastQty = LastQty;
        }
        if (LastPx != undefined) {
            this.LastPx = LastPx;
        }
        if (Currency != undefined) {
            this.Currency = Currency;
        }
        if (LastMkt != undefined) {
            this.LastMkt = LastMkt;
        }
        if (TradeDate != undefined) {
            this.TradeDate = TradeDate;
        }
        if (TransactTime != undefined) {
            this.TransactTime = TransactTime;
        }
        if (TrdCapRptSideGrp != undefined) {
            this.TrdCapRptSideGrp = TrdCapRptSideGrp;
        }
        if (NoSides != undefined) {
            this.NoSides = NoSides;
        }
        if (ClearingIntention != undefined) {
            this.ClearingIntention = ClearingIntention;
        }
        if (RegulatoryReportType != undefined) {
            this.RegulatoryReportType = RegulatoryReportType;
        }
        if (SecondaryTradeID != undefined) {
            this.SecondaryTradeID = SecondaryTradeID;
        }
        if (PackageID != undefined) {
            this.PackageID = PackageID;
        }

        if (TradeNumber != undefined) {
            this.TradeNumber = TradeNumber;
        }
        if (TrdRptStatus != undefined) {
            this.TrdRptStatus = TrdRptStatus;
        }
        if (TrdType != undefined) {
            this.TrdType = TrdType;
        }
        if (TrdSubType != undefined) {
            this.TrdSubType = TrdSubType;
        }
        if (SecondaryTrdType != undefined) {
            this.SecondaryTrdType = SecondaryTrdType;
        }
        if (TradePriceConditionGrp != undefined) {
            this.TradePriceConditionGrp = TradePriceConditionGrp;
        }
        if (NoTradePriceConditions != undefined) {
            this.NoTradePriceConditions = NoTradePriceConditions;
        }
        if (TotNumTradeReports != undefined) {
            this.TotNumTradeReports = TotNumTradeReports;
        }
        if (QtyType != undefined) {
            this.QtyType = QtyType;
        }
        if (TrdRegTimestamps != undefined) {
            this.TrdRegTimestamps = TrdRegTimestamps;
        }
        if (NoTrdRegTimestamps != undefined) {
            this.NoTrdRegTimestamps = NoTrdRegTimestamps;
        }
        if (TrdRegPublicationGrp != undefined) {
            this.TrdRegPublicationGrp = TrdRegPublicationGrp;
        }
        if (NoTrdRegPublications != undefined) {
            this.NoTrdRegPublications = NoTrdRegPublications;
        }
    }
    getGroups() {
        if (this.NoSides != undefined && this.TrdCapRptSideGrp != undefined) {
            if (this.NoSides == this.TrdCapRptSideGrp.length) {
                // let obj:groups; obj.index=552; obj.delim=54;
                let TrdCapRptSideGrpList = [];
                this
                    .TrdCapRptSideGrp
                    .forEach(element => {
                        TrdCapRptSideGrpList.push(element.convertToTags());
                    });
                // obj.entries=TrdCapRptSideGrpList;
                var temp = {
                    index: 552,
                    delim: 54,
                    entries: TrdCapRptSideGrpList
                };
                this
                    .tagGrp
                    .push(temp);
            } else {
                console.log("Error in making group of TrdCapRptSideGrp.");
            }
        }

        if (this.NoTrdRegTimestamps != undefined && this.TrdRegTimestamps != undefined) {
            if (this.NoTrdRegTimestamps == this.TrdRegTimestamps.length) {
                // let obj:groups; obj.index=768; obj.delim=769;
                let TrdRegTimestampsList = [];
                this
                    .TrdRegTimestamps
                    .forEach(element => {
                        TrdRegTimestampsList.push(element.convertToTags());
                    });
                // obj.entries=TrdRegTimestampsList;
                var temp = {
                    index: 768,
                    delim: 769,
                    entries: TrdRegTimestampsList
                };
                this
                    .tagGrp
                    .push(temp);
            } else {
                console.log("Error in making group of TrdRegTimestamps.");
            }
        }

        if (this.NoRootPartyIDs != undefined && this.RootParties != undefined) {
            if (this.NoRootPartyIDs == this.RootParties.length) {
                // let obj:groups; obj.index=1116; obj.delim=1117;
                let RootPartiesList = [];
                this
                    .RootParties
                    .forEach(element => {
                        RootPartiesList.push(element.convertToTags());
                    });
                // obj.entries=RootPartiesList;
                var temp = {
                    index: 1116,
                    delim: 1117,
                    entries: RootPartiesList
                };
                this
                    .tagGrp
                    .push(temp);
            } else {
                console.log("Error in making group of RootParties.");
            }
        }
        if (this.NoTradePriceConditions != undefined && this.TradePriceConditionGrp != undefined) {
            if (this.NoTradePriceConditions != this.TradePriceConditionGrp.length) {
                console.log("Error in making Group of NoTradePriceCondition.");
            } else {
                // let obj:groups={}; obj.index=1838; obj.delim=1839;
                let TradePriceConditionGrpList = [];
                this
                    .TradePriceConditionGrp
                    .forEach(element => {
                        TradePriceConditionGrpList.push(element.convertToTags());
                    });
                // obj.entries=TradePriceConditionGrpList;
                var temp = {
                    index: 1838,
                    delim: 1839,
                    entries: TradePriceConditionGrpList
                };

                this
                    .tagGrp
                    .push(temp);
            }
        }

        if (this.NoTrdRegPublications != undefined && this.TrdRegPublicationGrp != undefined) {
            if (this.NoTrdRegPublications == this.TrdRegPublicationGrp.length) {
                // let obj:groups; obj.index=2668; obj.delim=2669;
                let TrdRegPublicationGrpList = [];
                this
                    .TrdRegPublicationGrp
                    .forEach(element => {
                        TrdRegPublicationGrpList.push(element.convertToTags());
                    });
                // obj.entries=TrdRegPublicationGrpList;
                var temp = {
                    index: 2668,
                    delim: 2669,
                    entries: TrdRegPublicationGrpList
                };
                this
                    .tagGrp
                    .push(temp);
            } else {
                console.log("Error in making group of TrdRegPublicationGrp.");
            }
        }
        if (this.instrument != undefined) {
            if (this.instrument.NoSecurityAltID != undefined && this.instrument.SecAltIDGrp != undefined) {
                if (this.instrument.NoSecurityAltID == this.instrument.SecAltIDGrp.length) {
                    var SecAlt_list = [];
                    this
                        .instrument
                        .SecAltIDGrp
                        .forEach(element => {
                            SecAlt_list.push(element.convertToTags());
                        });
                    // element_grp["entries"] = SecAlt_list;
                    var temp = {
                        index: 454,
                        delim: 455,
                        entries: SecAlt_list
                    };
                    this
                        .tagGrp
                        .push(temp);
                } else {
                    console.log("Error in instrument.NoSecurityAltID");
                }
            }
            if (this.instrument.NoSecondaryAssetClasses != undefined && this.instrument.SecondaryAssetGrp != undefined) {
                if (this.instrument.NoSecondaryAssetClasses == this.instrument.SecondaryAssetGrp.length) {
                    var SecondaryAsset_list = [];
                    this
                        .instrument
                        .SecondaryAssetGrp
                        .forEach(element => {
                            SecondaryAsset_list.push(element.convertToTags());
                        });
                    var temp = {
                        index: 1976,
                        delim: 1977,
                        entries: SecondaryAsset_list
                    };
                    this
                        .tagGrp
                        .push(temp);
                } else {
                    console.log("Error in instrument.NoSecondaryAssetClasses");
                }
            }
        }
        return this.tagGrp;
    }
    getTags() {
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
        if (this.TrdRptStatus != undefined) {
            obj["939"] = this.TrdRptStatus;
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
        if (this.TradePriceConditionGrp != undefined && this.NoTradePriceConditions != undefined) {
            if (this.TradePriceConditionGrp.length == this.NoTradePriceConditions) {
                obj["1838"] = this.NoTradePriceConditions;
            } else {
                console.log("Error in TradePriceConditionGrp");
            }
        }
        if (this.TotNumTradeReports) {
            obj["748"] = this.TotNumTradeReports;
        }
        if (this.PriceType) {
            obj["423"] = this.PriceType;
        }
        if (this.NoRootPartyIDs != undefined && this.NoRootPartyIDs != 0) {
            if (this.NoRootPartyIDs == this.RootParties.length) {
                obj["1116"] = this.NoRootPartyIDs;
            } else {
                console.log("Invalid RootParties in the package.");
            }
        }
        if (this.VenueType != undefined) {
            obj["1430"] = this.VenueType;
        }
        if (this.instrument != undefined) {
            if (this.instrument.NoSecurityAltID != undefined && this.instrument.SecAltIDGrp != undefined) {
                if (this.instrument.NoSecurityAltID == this.instrument.SecAltIDGrp.length) {
                    obj["454"] = this.instrument.NoSecurityAltID;
                } else {
                    console.log("Invalid instrument.NoSecurityAltId");
                }
            }
            if (this.instrument.NoSecondaryAssetClasses != undefined && this.instrument.SecondaryAssetGrp != undefined) {
                if (this.instrument.NoSecondaryAssetClasses == this.instrument.SecondaryAssetGrp.length) {
                    obj["1976"] = this.instrument.NoSecondaryAssetClasses;
                } else {
                    console.log("Invalid instrument.NoSecondaryAssetClasses");
                }
            }
            if (this.instrument.Symbol != undefined) {
                obj["55"] = this.instrument.Symbol;
            }
            if (this.instrument.SecurityID != undefined) {
                obj["48"] = this.instrument.SecurityID;
            }
            if (this.instrument.SecurityIDSource != undefined) {
                obj["22"] = this.instrument.SecurityIDSource;
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
        if (this.QtyType != undefined) {
            obj["854"] = this.QtyType;
        }
        if (this.TrdRegTimestamps != undefined && this.NoTrdRegTimestamps != undefined) {
            if (this.NoRootPartyIDs == this.TrdRegTimestamps.length) {
                obj["768"] = this.NoTrdRegTimestamps;
            } else {
                console.log("Error in NoRootPartyIDs");
            }

        }
        if (this.NoSides != undefined && this.TrdCapRptSideGrp.length != undefined) {
            if (this.NoSides == this.TrdCapRptSideGrp.length) {
                obj["552"] = this.NoSides;
            } else {
                console.log("Error in NoRootPartyIDs");
            }
        }
        if (this.TrdRegPublicationGrp != undefined && this.NoTrdRegPublications != undefined) {
            if (this.NoTrdRegPublications == this.TrdRegPublicationGrp.length) {
                obj["2668"] = this.NoTrdRegPublications;
            } else {
                console.log("Error in NoTrdRegPublications");
            }
        }

        if (this.ClearingIntention != undefined) {
            obj["1924"] = this.ClearingIntention;
        }
        if (this.RegulatoryReportType != undefined) {
            obj["1934"] = this.RegulatoryReportType
        }
        if (this.TradePublishIndicator != undefined) {
            obj["1390"] = this.TradePublishIndicator;
        }
        this.tagObj = obj;
        return obj;
    }
    convertToField(message) {
        var obj: TCR_class;
        let noSide = 0;
        let TrdCapRptSideGrpList: TrdCapRptSideGrp[] = [];
        if (message.groups["552"] != undefined) {
            message.groups["552"].forEach(element => {
                TrdCapRptSideGrpList.push(TrdCapRptSideGrp.convertFromTags(element.tags));
                noSide++;
            });
        }
        let noRootPartyIDs = 0;
        let RootPartiesList: RootParties[] = [];
        if (message.groups["1116"] != undefined) {
            message.groups["1116"].forEach(element => {
                RootPartiesList.push(RootParties.convertFromTags(element.tags));
                noRootPartyIDs++;
            });
        }
        let noTradePriceConditions = 0;
        let TradePriceConditionGrpList: TradePriceConditionGrp[];
        if (message.groups["1838"] != undefined) {
            message.groups["1838"].forEach(element => {
                TradePriceConditionGrpList.push(TradePriceConditionGrp.convertFromTags(element.tags));
                noTradePriceConditions++;
            });
            console.log(" NoTradePriceConditionGrpList ", TradePriceConditionGrpList);
        }

        // obj = new TCR_class(message.tags["1003"], message.tags["856"], message.tags["423"], noRootPartyIDs, RootPartiesList, new instrument(message.tags["55"], message.tags["48"], message.tags["22"]), message.tags["32"], message.tags["31"], message.tags["15"], message.tags["30"], message.tags["75"], message.tags["60"], noSide, TrdCapRptSideGrpList, message.tags["1924"], message.tags["1934"]);
        let noTrdRegTimestamp = 0
        let TrdRegTimestampsList: TrdRegTimestamps[];
        if (message.groups["768"] != undefined) {
            message.groups["768"].forEach(element => {
                TrdRegTimestampsList.push(TrdRegTimestamps.convertFromTags(element.tags));
                noTrdRegTimestamp++;
            });
        }
        let noTrdRegPublication = 0;
        let TrdRegPublicationGrpList: TrdRegPublicationGrp[];
        if (message.groups["2668"] != undefined) {
            message.group["2668"].forEach(element => {
                TrdRegPublicationGrpList.push(TrdRegPublicationGrp.convertFromTags(element.tags));
                noTrdRegPublication++;
            });
        }

        obj = new TCR_class(message.tags["1003"], message.tags["856"], message.tags["423"], noRootPartyIDs, RootPartiesList, instrument.convertFromTags(message), message.tags["32"], message.tags["31"], message.tags["15"], message.tags["30"], message.tags["75"], message.tags["60"], noSide, TrdCapRptSideGrpList, message.tags["1924"], message.tags["1934"], message.tags["1040"], message.tags["2489"], message.tags["2490"], message.tags["939"], message.tags["828"], message.tags["829"], message.tags["855"], TradePriceConditionGrpList, noTradePriceConditions, message.tags["748"], message.tags["1430"], message.tags["854"], TrdRegTimestampsList, noTrdRegTimestamp, TrdRegPublicationGrpList, noTrdRegPublication,message.tags["1390"]);
        return obj;
    }
}

/*

 let noSecalt=0;
        let SecAltIDGrpList:SecAltIDGrp[];
        if(message.groups["454"]!=undefined){
            message.group["454"].forEach(element => {
                SecAltIDGrpList.push(SecAltIDGrp.convertFromTags(element.tags));
                noSecalt++;
            });
        }
        let noSecondaryAssetClasse=0;
        let SecondaryAssetGrpList:SecondaryAssetGrp[];
        if(message.groups["1976"]!=undefined){
            message.groups["1976"].forEach(element => {
                SecondaryAssetGrpList.push(SecondaryAssetGrp.convertFromTags(element.tags));
                noSecondaryAssetClasse++;
            });
        }


*/