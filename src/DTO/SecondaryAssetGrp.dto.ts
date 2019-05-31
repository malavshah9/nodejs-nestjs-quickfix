export class SecondaryAssetGrp
{
    NoSecondaryAssetClasses?:number;
    SecondaryAssetClass?:number;
    SecondaryAssetSubClass?:number;
    SecondaryAssetType?:string;

    convertToTags()
    {
        var obj={
            tags:{
                "1976":this.NoSecondaryAssetClasses,
                "1977":this.SecondaryAssetClass,
                "1978":this.SecondaryAssetSubClass,
                "1979":this.SecondaryAssetType
            }
        };
        return obj;
    }
}