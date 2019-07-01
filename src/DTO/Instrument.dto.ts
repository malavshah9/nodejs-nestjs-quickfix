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
    async convertTags() {
        var obj = {};
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
        if (this.NoSecurityAltID != undefined && this.SecAltIDGrp != undefined) {
            if (this.NoSecurityAltID == this.SecAltIDGrp.length) {
                obj["454"] = this.NoSecurityAltID;
            }
            else {
                console.log("Error in NoSecurityAltID")
            }
        }
        if (this.NoSecondaryAssetClasses != undefined && this.SecondaryAssetGrp != undefined) {
            if (this.NoSecondaryAssetClasses == this.SecondaryAssetGrp.length) {
                obj["1976"] = this.NoSecondaryAssetClasses;
            }
            else {
                console.log("Error in NoSecondaryAssetClasses")
            }
        }
        return obj;
    }
    async convertGroups() {
        var obj_t: any[] = [];
        if (this.NoSecurityAltID != undefined && this.SecAltIDGrp != undefined) {
            if (this.NoSecurityAltID == this.SecAltIDGrp.length) {
                var element_grp = {};
                element_grp["index"] = 454;
                element_grp["delim"] = 455;
                var SecAlt_list = [];
                this.SecAltIDGrp.forEach(async element => {
                    SecAlt_list.push(await element.convertToTags());
                });
                element_grp["entries"] = SecAlt_list;
                obj_t.push(element_grp);
            }
            else {
                console.log("Error in NoSecAltId in SecAltIDGrp");
            }
        }
        if (this.NoSecondaryAssetClasses != undefined && this.SecondaryAssetGrp != undefined) {
            if (this.NoSecondaryAssetClasses == this.SecondaryAssetGrp.length) {
                var element_grp = {};
                element_grp["index"] = 454;
                element_grp["delim"] = 455;
                var SecondaryAsset_list = [];
                this.SecondaryAssetGrp.forEach(async element => {
                    SecondaryAsset_list.push(await element.convertToTags());
                });
                element_grp["entries"] = SecondaryAsset_list;
                obj_t.push(element_grp);
            }
            else {
                console.log("Error in NoSecondaryAssetId in SecondaryAssetGroup");
            }
        }
        return obj_t;
    }
    static async convertFromTags(obj: any): Promise<instrument> {
        let instrument_obj: instrument;
        if (obj.tags["55"] != undefined && obj.tags["48"] != undefined && obj.tags["22"] != undefined) {
            instrument_obj = new instrument(obj.tags["55"], obj.tags["48"], obj.tags["22"]);
            if (obj.tags["541"] != undefined) {
                instrument_obj.MaturityDate = obj.tags["541"];
            }
            if (obj.tags["1938"] != undefined) {
                instrument_obj.AssetClass = obj.tags["1938"];
            }
            if (obj.tags["231"] != undefined) {
                instrument_obj.ContractMultiplier = obj.tags["231"];
            }
            if (obj.tags["996"] != undefined) {
                instrument_obj.UnitOfMeasure = obj.tags["996"];
            }
            if (obj.tags["1147"] != undefined) {
                instrument_obj.UnitOfMeasureQty = obj.tags["1147"];
            }
            if (obj.tags["1716"] != undefined) {
                instrument_obj.UnitOfMeasureCurrency = obj.tags["1716"];
            }
            if (obj.tags["40054"] != undefined) {
                instrument_obj.StreamGrp.StreamNotional = obj.tags["40054"];
            }
            if (obj.tags["40055"] != undefined) {
                instrument_obj.StreamGrp.StreamCurrency = obj.tags["40055"];
            }
            if (obj.groups != undefined) {
                if (obj.groups["454"] != undefined) {
                    let count = 0;
                    let SecAltIDList: SecAltIDGrp[] = [];
                    obj.groups["454"].forEach(async element => {
                        SecAltIDList.push(await SecAltIDGrp.convertFromTags(element));
                        count++;
                    });
                    instrument_obj.NoSecurityAltID = count;
                    instrument_obj.SecAltIDGrp = SecAltIDList;
                }
                if (obj.groups["1976"] != undefined) {
                    let count = 0;
                    let secondaryAssetGrpList: SecondaryAssetGrp[] = [];
                    obj.groups["1976"].forEach(async element => {
                        secondaryAssetGrpList.push(await SecondaryAssetGrp.convertFromTags(element));
                        count++;
                    });
                    instrument_obj.NoSecondaryAssetClasses = count;
                    instrument_obj.SecondaryAssetGrp = secondaryAssetGrpList;
                }
            }
            // if()
        }
        return instrument_obj;
    }
}