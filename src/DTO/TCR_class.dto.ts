import { TradePriceConditionGrp } from "./TradePriceConditionGrp.dto";
import { RootParties } from "./RootParties.dto";
import { instrument } from "./Instrument.dto";
import { TrdRegTimestamps } from "./TrdRegTimestamps.dto";
import { TrdCapRptSideGrp } from "./TrdCapRptSideGrp.dto";
import { TrdRegPublicationGrp } from "./TrdRegPublicationGrp.dto";
import { temp } from "./temp.dto";
import { groups } from "./groups.dto";
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
    NoTradePriceConditions?: number;        //--
    TotNumTradeReports?: number;
    PriceType: string;
    RootParties: RootParties[]; //Group     --
    NoRootPartyIDs: number;                 //--
    VenueType: string;
    instrument: instrument; //Group 
    QtyType?: number;
    LastQty: number;
    LastPx: number;
    Currency: any;
    LastMkt: string;
    TradeDate: string;
    TransactTime: string;
    TrdRegTimestamps?: TrdRegTimestamps[]; //Group
    NoTrdRegTimestamps?: number             //--
    TrdCapRptSideGrp: TrdCapRptSideGrp[]; //Group
    NoSides: number;                        //--
    TrdRegPublicationGrp?: TrdRegPublicationGrp[]; //Group
    NoTrdRegPublications?: number;          //--
    ClearingIntention: number;
    RegulatoryReportType: number;
    tagObj:any;
    tagGrp:any[]=[];
    constructor(TradeId: string, TradeReportType: number, PriceType: string, NoRootPartyIDs: number, RootParties: RootParties[], VenueType: string, instrument: instrument, LastQty: number, LastPx: number, Currency: any, LastMkt: string, TradeDate: string, TransactTime: string, NoSides: number, TrdCapRptSideGrp: TrdCapRptSideGrp[], ClearingIntention: number, RegulatoryReportType: number) {
        this.TradeID = TradeId;
        this.TradeReportType = TradeReportType;
        this.PriceType = PriceType;
        this.RootParties = RootParties;
        this.NoRootPartyIDs = NoRootPartyIDs;
        this.VenueType = VenueType;
        this.instrument = instrument;
        this.LastQty = LastQty;
        this.LastPx = LastPx;
        this.Currency = Currency;
        this.LastMkt = LastMkt;
        this.TradeDate = TradeDate;
        this.TransactTime = TransactTime;
        this.TrdCapRptSideGrp = TrdCapRptSideGrp;
        this.NoSides = NoSides;
        this.ClearingIntention = ClearingIntention;
        this.RegulatoryReportType = RegulatoryReportType;
    }
    getGroups(){
        if(this.NoTradePriceConditions!=undefined && this.TradePriceConditionGrp!=undefined){
            if(this.NoTradePriceConditions!=this.TradePriceConditionGrp.length){
                console.log("Error in making Group of NoTradePriceCondition.");
            }
            else{
                let obj:groups;
                obj.index=1838;
                obj.delim=1839;
                let TradePriceConditionGrpList=[];
                this.TradePriceConditionGrp.forEach(element => {
                    TradePriceConditionGrpList.push(element.convertToTags());
                });
                obj.entries=TradePriceConditionGrpList;
                this.tagGrp.push(obj);
            }
        }
        if(this.NoRootPartyIDs!=undefined && this.RootParties!=undefined){
            if(this.NoRootPartyIDs==this.RootParties.length){
                let obj:groups;
                obj.index=1116;
                obj.delim=1117;
                let RootPartiesList=[];
                this.RootParties.forEach(element => {
                    RootPartiesList.push(element.convertToTags());
                });
                obj.entries=RootPartiesList;
                this.tagGrp.push(obj);
            }
            else{
                console.log("Error in making group of RootParties.");
            }
        }
        if(this.NoRootPartyIDs!=undefined && this.RootParties!=undefined){
            if(this.NoRootPartyIDs==this.RootParties.length){
                let obj:groups;
                obj.index=1116;
                obj.delim=1117;
                obj.entries=this.RootParties;
                this.tagGrp.push(obj);
            }
            else{
                console.log("Error in making group of RootParties.");
            }
        }
        if(this.NoTrdRegTimestamps!=undefined && this.TrdRegTimestamps!=undefined){
            if(this.NoTrdRegTimestamps==this.TrdRegTimestamps.length){
                let obj:groups;
                obj.index=768;
                obj.delim=769;
                obj.entries=this.TrdRegTimestamps;
                this.tagGrp.push(obj);
            }
            else{
                console.log("Error in making group of TrdRegTimestamps.");
            }
        }
        if(this.NoSides!=undefined && this.TrdCapRptSideGrp!=undefined){
            if(this.NoSides==this.TrdCapRptSideGrp.length){
                let obj:groups;
                obj.index=552;
                obj.delim=54;
                obj.entries=this.TrdCapRptSideGrp;
                this.tagGrp.push(obj);
            }
            else{
                console.log("Error in making group of TrdCapRptSideGrp.");
            }
        }
        if(this.NoTrdRegPublications!=undefined && this.TrdRegPublicationGrp!=undefined){
            if(this.NoTrdRegPublications==this.TrdRegPublicationGrp.length){
                let obj:groups;
                obj.index=2668;
                obj.delim=2669;
                obj.entries=this.TrdCapRptSideGrp;
                this.tagGrp.push(obj);
            }
            else{
                console.log("Error in making group of TrdRegPublicationGrp.");
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
        if (this.TradePriceConditionGrp != undefined && this.NoTradePriceConditions!=undefined) {
            if(this.TradePriceConditionGrp.length==this.NoTradePriceConditions){
                obj["1838"]=this.NoTradePriceConditions;
            }
            else{
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
                obj["1116"]=this.NoRootPartyIDs;
            }
            else {
                console.log("Invalid RootParties in the package.");
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
                if (this.instrument.NoSecurityAltID != undefined) {
                    obj["454"] = this.instrument.NoSecurityAltID;
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
                if (this.instrument.NoSecondaryAssetClasses != undefined) {
                    obj["1976"] = this.instrument.NoSecondaryAssetClasses;
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
        if (this.TrdRegTimestamps != undefined && this.NoTrdRegTimestamps != undefined) {
            if (this.NoRootPartyIDs==this.TrdRegTimestamps.length) {
                obj["768"] = this.NoTrdRegTimestamps;
            }
            else{
                console.log("Error in NoRootPartyIDs");
            }

        }
        if (this.NoSides != undefined && this.TrdCapRptSideGrp.length!=undefined) {
           if(this.NoSides==this.TrdCapRptSideGrp.length){
                obj["552"]=this.NoSides;
           }
           else{
                console.log("Error in NoRootPartyIDs");
           }
        }
        if (this.TrdRegPublicationGrp != undefined && this.NoTrdRegPublications!=undefined) {
            if (this.NoTrdRegPublications ==this.TrdRegPublicationGrp.length) {
                obj["2668"] = this.NoTrdRegPublications;
            }
            else{
                console.log("Error in NoTrdRegPublications");
            }
        }

        if (this.ClearingIntention != undefined) {
            obj["1924"] = this.ClearingIntention;
        }
        if (this.RegulatoryReportType != undefined) {
            obj["1934"] = this.RegulatoryReportType
        }
        this.tagObj=obj;
    }
}
