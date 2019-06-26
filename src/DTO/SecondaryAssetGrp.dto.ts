export class SecondaryAssetGrp
{
    SecondaryAssetClass?: number;
    SecondaryAssetSubClass?: number;
    SecondaryAssetType?: string;
    convertToTags()
    {
        var obj = {};
        if (this.SecondaryAssetClass != undefined) {
            obj["1977"] = this.SecondaryAssetClass;
        }
        if (this.SecondaryAssetSubClass != undefined) {
            obj["1978"] = this.SecondaryAssetSubClass;
        }
        if (this.SecondaryAssetType != undefined) {
            obj["1979"] = this.SecondaryAssetType;
        }
        return obj;
    }
    static convertFromTags(obj:any){
        let myobj=new SecondaryAssetGrp();
        if(obj.tags["1977"]!=undefined){
            myobj.SecondaryAssetClass=obj.tags["1977"];
        }
        if(obj.tags["1978"]!=undefined){
            myobj.SecondaryAssetSubClass=obj.tags["1978"];
        }
        if(obj.tags["1979"]!=undefined){
            myobj.SecondaryAssetType=obj.tags["1979"];
        }
        return myobj;
    }
}