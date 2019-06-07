export class SecondaryAssetGrp
{
    SecondaryAssetClass?: number;
    SecondaryAssetSubClass?: number;
    SecondaryAssetType?: string;
    convertToTags()
    {
        var obj = {};
        if (this.SecondaryAssetClass != undefined) {
            obj["1977"];
            this.SecondaryAssetClass;
        }
        if (this.SecondaryAssetSubClass != undefined) {
            obj["1978"] = this.SecondaryAssetSubClass;
        }
        if (this.SecondaryAssetType != undefined) {
            obj["1979"] = this.SecondaryAssetType;
        }
        return obj;
    };
}