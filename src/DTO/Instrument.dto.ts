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