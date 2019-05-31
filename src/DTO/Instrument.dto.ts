import { SecAltIDGrp } from "./SecAltIDGrp.dto";
import { SecondaryAssetGrp } from "./SecondaryAssetGrp.dto";
import { StreamGrp } from "./StreamGrp.dto";

export class instrument
{
    Symbol:string;
    SecurityID:string;
    SecurityIDSource:string;

    SecAltIDGrp:SecAltIDGrp; // Group

    MaturityDate?:string;
    AssetClass?:number;
    AssetSubClass?:number;
    AssetType?:string;

    SecondaryAssetGrp?:SecondaryAssetGrp; // Group

    ContractMultiplier?:number;
    UnitOfMeasure?:string;
    UnitOfMeasureQty?:number;
    UnitOfMeasureCurrency?:number;
    PutOrCall:number;

    StreamGrp?:StreamGrp; //Group

    convertToTags()
    {
        var obj={
            tags:{
                "55":this.Symbol,
                "48":this.SecurityID,
                "22":this.SecurityIDSource,
                "541":this.MaturityDate,
                "1938":this.AssetClass,
                "1939":this.AssetSubClass,
                "1940":this.AssetType,
                "231":this.ContractMultiplier,
                "996":this.UnitOfMeasure,
                "1147":this.UnitOfMeasureQty,
                "1716":this.UnitOfMeasureCurrency,
                "201":this.PutOrCall, 
            }
            
        };
        return obj;
    }
}