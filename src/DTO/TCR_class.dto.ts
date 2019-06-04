import { TradePriceConditionGrp } from "./TradePriceConditionGrp.dto";
import { RootParties } from "./RootParties.dto";
import { instrument } from "./Instrument.dto";
import { TrdRegTimestamps } from "./TrdRegTimestamps.dto";
import { TrdCapRptSideGrp } from "./TrdCapRptSideGrp.dto";
import { TrdRegPublicationGrp } from "./TrdRegPublicationGrp.dto";

export class TCR_class
{
        TradeID:string;
        SecondaryTradeID?:string;
        PackageID?:string;
        TradeNumber?:number;
        TradeReportType:number;
        TrdRptStatus?:number;
        TrdType?:number;
        TrdSubType?:number;
        SecondaryTrdType?:number;
        
        TradePriceConditionGrp?:TradePriceConditionGrp; //Group
        
        TotNumTradeReports?:number;
        PriceType:number;
        
        RootParties:RootParties; //Group

        VenueType:string;

        instrument:instrument; //Group

        QtyType?:number;

        LastQty:number;
        LastPx:number;
        Currency:string;
        LastMkt:string;
        TradeDate:string;
        TransactTime:string;

        TrdRegTimestamps?:TrdRegTimestamps; //Group
        TrdCapRptSideGrp:TrdCapRptSideGrp; //Group
        TrdRegPublicationGrp?:TrdRegPublicationGrp //Group

        ClearingIntention:number;
        RegulatoryReportType:number;
        
        constructor(TradeId:string, TradeReportType:number,PriceType:number,RootParties:RootParties,VenueType:string
                   ,instrument:instrument,LastQty:number,LastPx:number,Currency:string,LastMkt:string,
                   TradeDate:string,TransactTime:string, TrdCapRptSideGrp:TrdCapRptSideGrp,
                   ClearingIntention:number,RegulatoryReportType:number)
        {
                this.TradeID=TradeId;
                this. TradeReportType= TradeReportType;
                this.PriceType=PriceType;

                this.RootParties=RootParties;

                this.VenueType= VenueType;
               
                this.instrument=instrument;

                this.LastQty=LastQty;
                this.LastPx=LastPx;
                this.Currency=Currency;
                this.LastMkt=LastMkt;
                this.TradeDate=TradeDate;
                this.TransactTime=TransactTime;
                this.TrdCapRptSideGrp= TrdCapRptSideGrp;
                this.ClearingIntention=ClearingIntention;
                this.RegulatoryReportType=RegulatoryReportType;
        }
        convertToString()
        {
                var obj={
                        tags:{
                                "1003":this.TradeID,
                                "1040":this.SecondaryTradeID,
                                "2489":this.PackageID,
                                "2490":this.TradeNumber,
                                "856":this.TradeReportType,
                                "828":this.TrdType,
                                "829":this.TrdSubType,
                                "855":this.SecondaryTrdType,
                                "1838":this.TradePriceConditionGrp.NoTradePriceConditions,
                                "1839":this.TradePriceConditionGrp.TradePriceCondition,
                                "748":this.TotNumTradeReports,
                                "423":this.PriceType,
                                "1116":this.RootParties.NoRootPartyIDs,
                                "1117":this.RootParties.RootPartyID,
                                "1118":this.RootParties.RootPartyIDSource,
                                "1119":this.RootParties.RootPartyRole,
                                "1430":this.VenueType,
                                "55":this.instrument.Symbol,
                                "48":this.instrument.SecurityID,
                                "22":this.instrument.SecurityIDSource,
                                "454":this.instrument.SecAltIDGrp.NoSecurityAltID,
                                "455":this.instrument.SecAltIDGrp.SecurityAltID,
                                "456":this.instrument.SecAltIDGrp.SecurityAltIDSource,
                                "541":this.instrument.MaturityDate,
                                "1938":this.instrument.AssetClass,
                                "1939":this.instrument.AssetSubClass,
                                "1940":this.instrument.AssetType,
                                "1976":this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses,
                                "1977":this.instrument.SecondaryAssetGrp.SecondaryAssetClass,
                                "1978":this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass,
                                "1979":this.instrument.SecondaryAssetGrp.SecondaryAssetType,
                                "231":this.instrument.ContractMultiplier,
                                "996":this.instrument.UnitOfMeasure,
                                "1147":this.instrument.UnitOfMeasureQty,
                                "1716":this.instrument.UnitOfMeasureCurrency,
                                "201":this.instrument.PutOrCall, 
                                "40054":this.instrument.StreamGrp.StreamNotional,
                                "40055":this.instrument.StreamGrp.StreamCurrency,
                                "32":this.LastQty,
                                "31":this.LastPx,
                                "15":this.Currency,
                                "30":this.LastMkt,
                                "75":this.TradeDate,
                                "60":this.TransactTime,
                                "768":this.TrdRegTimestamps.NoTrdRegTimestamps,
                                "769":this.TrdRegTimestamps.TrdRegTimestamp,
                                "770":this.TrdRegTimestamps.TrdRegTimestampType,
                                "552":this.TrdCapRptSideGrp.NoSides,
                                "54":this.TrdCapRptSideGrp.Side,
                                "453":this.TrdCapRptSideGrp.Parties.NoPartyIDs,
                                "448":this.TrdCapRptSideGrp.Parties.PartyID,
                                "447":this.TrdCapRptSideGrp.Parties.Part"55":this.instrument.Symbol,
                                "48":this.instrument.SecurityID,
                                "22":this.instrument.SecurityIDSource,
                                "454":this.instrument.SecAltIDGrp.NoSecurityAltID,
                                "455":this.instrument.SecAltIDGrp.SecurityAltID,
                                "456":this.instrument.SecAltIDGrp.SecurityAltIDSource,
                                "541":this.instrument.MaturityDate,
                                "1938":this.instrument.AssetClass,
                                "1939":this.instrument.AssetSubClass,
                                "1940":this.instrument.AssetType,
                                "1976":this.instrument.SecondaryAssetGrp.NoSecondaryAssetClasses,
                                "1977":this.instrument.SecondaryAssetGrp.SecondaryAssetClass,
                                "1978":this.instrument.SecondaryAssetGrp.SecondaryAssetSubClass,
                                "1979":this.instrument.SecondaryAssetGrp.SecondaryAssetType,
                                "231":this.instrument.ContractMultiplier,
                                "996":this.instrument.UnitOfMeasure,
                                "1147":this.instrument.UnitOfMeasureQty,
                                "1716":this.instrument.UnitOfMeasureCurrency,
                                "201":this.instrument.PutOrCall, 
                                "40054":this.instrument.StreamGrp.StreamNotional,
                                "40055":this.instrument.StreamGrp.StreamCurrency,
                                "32":this.LastQty,
                                "31":this.LastPx,
                                "15":this.Currency,
                                "30":this.LastMkt,
                                "75":this.TradeDate,
                                "60":this.TransactTime,
                                "768":this.TrdRegTimestamps.NoTrdRegTimestamps,
                                "769":this.TrdRegTimestamps.TrdRegTimestamp,
                                "770":this.TrdRegTimestamps.TrdRegTimestampType,
                                "552":this.TrdCapRptSideGrp.NoSides,
                                "54":this.TrdCapRptSideGrp.Side,
                                "453":this.TrdCapRptSideGrp.Parties.NoPartyIDs,
                                "448":this.TrdCapRptSideGrp.Parties.PartyID,
                                "447":this.TrdCapRptSideGrp.Parties.PartyIDSource,
                                "452":this.TrdCapRptSideGrp.Parties.PartyRole,
                                "29":this.TrdCapRptSideGrp.LastCapacity,
                                "2668":this.TrdRegPublicationGrp.NoTrdRegPublications,
                                "2669":this.TrdRegPublicationGrp.TrdRegPublicationType,
                                "2670":this.TrdRegPublicationGrp.TrdRegPublicationReason,
                                "1924":this.ClearingIntention,
                                "1934":this.RegulatoryReportTypeyIDSource,
                                "452":this.TrdCapRptSideGrp.Parties.PartyRole,
                                "29":this.TrdCapRptSideGrp.LastCapacity,
                                "2668":this.TrdRegPublicationGrp.NoTrdRegPublications,
                                "2669":this.TrdRegPublicationGrp.TrdRegPublicationType,
                                "2670":this.TrdRegPublicationGrp.TrdRegPublicationReason,
                                "1924":this.ClearingIntention,
                                "1934":this.RegulatoryReportType
                        }
                };
                return obj;
        }
        converter(){
                var obj={
                        tags:{}
                };
                if(this.TradeID!=undefined){
                        obj.tags["1003"]=this.TradeID;
                }
                if(this.SecondaryTradeID!=undefined){

                }
                if(this.PackageID!=undefined){

                }
                if(this.TradeNumber!=undefined){

                }
                if(this.TradeReportType!=undefined){

                }
                if(this.TrdType!=undefined){

                }
                if(this.TrdSubType!=undefined){

                }
                if(this.SecondaryTrdType!=undefined){

                }
                if(this.TradePriceConditionGrp!=undefined){
                        if(this.TradePriceConditionGrp.NoTradePriceConditions!=undefined){

                        }
                        if(this.TradePriceConditionGrp.TradePriceCondition!=undefined){

                        }
                }
                if(this.TotNumTradeReports){

                }
                if(this.PriceType){

                }
                if(this.RootParties!=undefined){
                        if(this.RootParties.NoRootPartyIDs!=undefined){

                        }
                        if(this.RootParties.RootPartyID!=undefined){

                        }
                        if(this.RootParties.RootPartyIDSource!=undefined){

                        }
                        if(this.RootParties.RootPartyRole!=undefined){

                        }
                }
                if(this.VenueType!=undefined){

                }
                

        }
}
