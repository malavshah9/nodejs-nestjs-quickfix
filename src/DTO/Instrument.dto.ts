import { SecAltIDGrp } from "./SecAltIDGrp.dto";
import { SecondaryAssetGrp } from "./SecondaryAssetGrp.dto";
import { StreamGrp } from "./StreamGrp.dto";

export class instrument {
    Symbol: string;
    SecurityID: string;
    SecurityIDSource: string;

    SecAltIDGrp?: SecAltIDGrp[]; // Group
    NoSecurityAltID?: number;


    MaturityDate?: string;
    AssetClass?: number;
    AssetSubClass?: number;
    AssetType?: string;

    SecondaryAssetGrp?: SecondaryAssetGrp[]; // Group
    NoSecondaryAssetClasses?: number;

    ContractMultiplier?: number;
    UnitOfMeasure?: string;
    UnitOfMeasureQty?: number;
    UnitOfMeasureCurrency?: number;
    PutOrCall?: number;

    StreamGrp?: StreamGrp; //Group



    constructor(Symbol: string, SecurityID: string, SecurityIDSource: string) {
        this.Symbol = Symbol;
        this.SecurityID = SecurityID;
        this.SecurityIDSource = SecurityIDSource;
    }
    convertTags()
    {
        var obj={};
        if (this.Symbol != undefined) {
                obj["55"] = this.Symbol;
            }
            if (this.SecurityID != undefined) {
                obj["48"] = this.SecurityID;
            }
            if (this.SecurityIDSource != undefined) {
                obj["22"] = this.SecurityIDSource;
            }
             if (this.MaturityDate != undefined) {
                obj["541"] = this.MaturityDate;
            }
            if (this.AssetClass != undefined) {
                obj["1938"] = this.AssetClass;
            }
            if (this.AssetSubClass != undefined) {
                obj["1939"] = this.AssetSubClass;
            }
            if (this.AssetType != undefined) {
                obj["1940"] = this.AssetType;
            }
            if (this.ContractMultiplier != undefined) {
                obj["231"] = this.ContractMultiplier;
            }
            if (this.UnitOfMeasure != undefined) {
                obj["996"] = this.UnitOfMeasure;
            }
            if (this.UnitOfMeasureQty != undefined) {
                obj["1147"] = this.UnitOfMeasureQty;
            }
            if (this.UnitOfMeasureCurrency != undefined) {
                obj["1716"] = this.UnitOfMeasureCurrency;
            }
            if (this.PutOrCall != undefined) {
                obj["201"] = this.PutOrCall;
            }
            if(this.NoSecurityAltID!=undefined && this.SecAltIDGrp!=undefined){
                if(this.NoSecurityAltID==this.SecAltIDGrp.length){
                    obj["454"]=this.NoSecurityAltID;
                }
                else{
                    console.log("Error in NoSecurityAltID")
                }
            }
            if(this.NoSecondaryAssetClasses!=undefined && this.SecondaryAssetGrp!=undefined){
                if(this.NoSecondaryAssetClasses==this.SecondaryAssetGrp.length){
                    obj["1976"]=this.NoSecondaryAssetClasses;
                }
                else{ 
                    console.log("Error in NoSecondaryAssetClasses")
                }
            }
            return obj;
    }
    convertGroups(){
        var obj_t:any[]=[];
        if (this.NoSecurityAltID!= undefined && this.SecAltIDGrp!=undefined) {
            if(this.NoSecurityAltID==this.SecAltIDGrp.length)
            {
                var element_grp={};
                element_grp["index"]=454;
                element_grp["delim"]=455;
                var SecAlt_list=[];
                this.SecAltIDGrp.forEach(element => {
                    SecAlt_list.push(element.convertToTags());
                });
                element_grp["entries"]=SecAlt_list;
                obj_t.push(element_grp);
            }
            else{
                console.log("Error in NoSecAltId in SecAltIDGrp");
            }
        }
        if (this.NoSecondaryAssetClasses!= undefined && this.SecondaryAssetGrp!=undefined) {
            if(this.NoSecondaryAssetClasses==this.SecondaryAssetGrp.length)
            {
                var element_grp={};
                element_grp["index"]=454;
                element_grp["delim"]=455;
                var SecondaryAsset_list=[];
                this.SecondaryAssetGrp.forEach(element => {
                    SecondaryAsset_list.push(element.convertToTags());
                });
                element_grp["entries"]=SecondaryAsset_list;
                obj_t.push(element_grp);
            }
            else{
                console.log("Error in NoSecondaryAssetId in SecondaryAssetGroup");
            }
        }
        return obj_t;
    }
    convertFromTags(){
        
    }
    // convertToTags()
    // {
    //     var obj={
    //         tags:{
    //             "55":this.Symbol,
    //             "48":this.SecurityID,
    //             "22":this.SecurityIDSource,
    //             "454":this.SecAltIDGrp.NoSecurityAltID,
    //             "455":this.SecAltIDGrp.SecurityAltID,
    //             "456":this.SecAltIDGrp.SecurityAltIDSource,
    //             "541":this.MaturityDate,
    //             "1938":this.AssetClass,
    //             "1939":this.AssetSubClass,
    //             "1940":this.AssetType,
    //             "1976":this.SecondaryAssetGrp.NoSecondaryAssetClasses,
    //             "1977":this.SecondaryAssetGrp.SecondaryAssetClass,
    //             "1978":this.SecondaryAssetGrp.SecondaryAssetSubClass,
    //             "1979":this.SecondaryAssetGrp.SecondaryAssetType,
    //             "231":this.ContractMultiplier,
    //             "996":this.UnitOfMeasure,
    //             "1147":this.UnitOfMeasureQty,
    //             "1716":this.UnitOfMeasureCurrency,
    //             "201":this.PutOrCall, 
    //             "40054":this.StreamGrp.StreamNotional,
    //             "40055":this.StreamGrp.StreamCurrency
    //         }
    //     };
    //     return obj;
    // }
}