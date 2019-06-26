export class TrdRegTimestamps
{
    TrdRegTimestamp?: string;
    TrdRegTimestampType?: number;
    convertToTags()
    {
        var obj : {};
        if (this.TrdRegTimestamp != undefined) {
            obj["769"] = this.TrdRegTimestamp;
        }
        if (this.TrdRegTimestampType != undefined) {
            obj["770"] = this.TrdRegTimestampType;
        }
        return obj;
    }
    static convertFromTags(obj:any){
        let myobj=new TrdRegTimestamps();
        if(obj.tags["769"]!=undefined){
            myobj.TrdRegTimestamp=obj.tags["769"];
        }
        if(obj.tags["770"]!=undefined){
            myobj.TrdRegTimestampType=obj.tags["770"];
        }
        return myobj;
    }
}