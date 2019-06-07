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
        NoTradePriceConditions?:number;
        
        TotNumTradeReports?:number;
        PriceType:number;
        
        RootParties:RootParties[]; //Group
        NoRootPartyIDs:number;

        VenueType:string;

        instrument:instrument; //Group

        QtyType?:number;

        LastQty:number;
        LastPx:number;
        Currency:any;
        LastMkt:string;
        TradeDate:string;
        TransactTime:string;

        TrdRegTimestamps?:TrdRegTimestamps[]; //Group
        NoTrdRegTimestamps?:number;

        TrdCapRptSideGrp:TrdCapRptSideGrp[]; //Group
        NoSides:number;

        TrdRegPublicationGrp?:TrdRegPublicationGrp[]; //Group
        NoTrdRegPublications?:number;

        ClearingIntention:number;
        RegulatoryReportType:number;
        
        


    constructor(TradeId : string, TradeReportType : number, PriceType : number,NoRootPartyIDs:number, RootParties : RootParties[], VenueType : string, instrument : instrument, LastQty : number, LastPx : number, Currency : any, LastMkt : string, TradeDate : string, TransactTime : string,NoSides:number, TrdCapRptSideGrp : TrdCapRptSideGrp[], ClearingIntention : number, RegulatoryReportType : number)
    {
        this.TradeID = TradeId;
        this.TradeReportType = TradeReportType;
        this.PriceType = PriceType;

        this.RootParties = RootParties;
        this.NoRootPartyIDs=NoRootPartyIDs;

        this.VenueType = VenueType;

        this.instrument = instrument;

        this.LastQty = LastQty;
        this.LastPx = LastPx;
        this.Currency = Currency;
        this.LastMkt = LastMkt;
        this.TradeDate = TradeDate;
        this.TransactTime = TransactTime;
        this.TrdCapRptSideGrp = TrdCapRptSideGrp;
        this.NoSides=NoSides;

        this.ClearingIntention = ClearingIntention;
        this.RegulatoryReportType = RegulatoryReportType;
    }
// constructor()
// {
        
// }

    converter() {
        // var obj = {
        //     groups:{
        //         index:{},
        //         delim:{},
        //         entries:{}
        //         }
        // };
        var obj={
            groups:[]
        };
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
            if (this.NoTradePriceConditions != undefined) {
                obj["1838"] = this.NoTradePriceConditions;
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
        if (this.NoRootPartyIDs != 0) {
            if(this.NoRootPartyIDs==this.RootParties.length){
                obj["1116"]=this.NoRootPartyIDs;
                var anotherobj={};
                anotherobj["index"]=1116;
                anotherobj["delim"]=1117;
                var ls=[];
                this.RootParties.forEach(element => {
                    let temp={};
                    if (element.RootPartyID != undefined) {
                        temp["1117"] = element.RootPartyID;
                    }
                    if (element.RootPartyIDSource != undefined) {
                        temp["1118"] = element.RootPartyIDSource;
                    }
                    if (element.RootPartyRole != undefined) {
                        temp["1119"] = element.RootPartyRole;
                    }  
                    ls.push(temp);
                });
                anotherobj['entries']=ls;
                obj.groups.push(anotherobj);
            }
            else{
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
                if (this.instrument.NoSecurityAltID != undefined && this.instrument.NoSecurityAltID>0) 
                {
                    obj["454"] = this.instrument.NoSecurityAltID;
                    var anotherobj={};
                    anotherobj["index"]=454;
                    anotherobj["delim"]=455;
                    var ls=[];
                    this.instrument.SecAltIDGrp.forEach(element => {
                        let temp={};
                        if (element.SecurityAltID != undefined) {
                            temp["455"] = element.SecurityAltID;
                        }
                        if (element.SecurityAltIDSource != undefined) {
                            temp["456"] = element.SecurityAltIDSource;
                        }
                        ls.push(temp);
                    });
                    anotherobj['entries']=ls;
                     obj.groups.push(anotherobj);
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
                if (this.instrument.NoSecondaryAssetClasses != undefined && this.instrument.NoSecondaryAssetClasses>0) {
                    obj["1976"] = this.instrument.NoSecondaryAssetClasses;
                    var anotherobj={};
                    anotherobj["index"]=1976;
                    anotherobj["delim"]=1977;
                    var ls=[];
                    this.instrument.SecondaryAssetGrp.forEach(element => {
                        var temp={};
                        if (element.SecondaryAssetClass != undefined) {
                            temp["1977"] = element.SecondaryAssetClass;
                        }
                        if (element.SecondaryAssetSubClass != undefined) {
                            temp["1978"] = element.SecondaryAssetSubClass;
                        }
                        if (element.SecondaryAssetType != undefined) {
                            temp["1979"] = element.SecondaryAssetType;
                        }    
                        ls.push(temp);
                    });
                    anotherobj['entries']=ls;
                    obj.groups.push(anotherobj);
                }
                else
                {
                    console.log("Invalid NoSecondaryAssetGrp");
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
            if (this.NoTrdRegTimestamps != undefined) {
                obj["768"] = this.NoTrdRegTimestamps;
                var anotherobj={};
                anotherobj["index"]=768;
                anotherobj["delim"]=769;
                var ls=[];
                this.TrdRegTimestamps.forEach(element => {
                    let temp={};
                    if (element.TrdRegTimestamp != undefined) {
                        temp["769"] = element.TrdRegTimestamp;
                    }
                    if (element.TrdRegTimestampType != undefined) {
                        temp["770"] = element.TrdRegTimestampType;
                    }
                    ls.push(temp);
                });
                anotherobj['entries']=ls;
                obj.groups.push(anotherobj);
            }
            

        }
        if (this.TrdCapRptSideGrp != undefined) {
            if (this.NoSides != undefined) {
                obj["552"] = this.NoSides;
            }
            if (this.TrdCapRptSideGrp.Side != undefined) {
                obj["54"] = this.TrdCapRptSideGrp.Side;
            }
            if (this.TrdCapRptSideGrp.LastCapacity != undefined) {
                obj["29"] = this.TrdCapRptSideGrp.LastCapacity;
            }
            if (this.TrdCapRptSideGrp.Parties != undefined) {
                if (this.TrdCapRptSideGrp.NoPartyIDs != undefined) {
                    obj["453"] = this.TrdCapRptSideGrp.NoPartyIDs;
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
            if (this.NoTrdRegPublications != undefined && this.NoTrdRegPublications>0) {
                obj["2668"] = this.NoTrdRegPublications;
                var anotherobj={};
                anotherobj["index"]=2668;
                anotherobj["delim"]=2669;
                var ls=[];
                this.TrdRegPublicationGrp.forEach(element => {
                    let temp={};
                    if (element.TrdRegPublicationType != undefined) {
                        temp["2669"] = element.TrdRegPublicationType;
                    }
                    if (element.TrdRegPublicationReason != undefined) {
                        temp["2670"] = element.TrdRegPublicationReason;
                    }
                    ls.push(temp);
                });
                anotherobj['entries']=ls;
                obj.groups.push(anotherobj);
            }
            else
            {
                console.log("Invalid NoTrdRegPublication");
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
