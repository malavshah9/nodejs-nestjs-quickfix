export class TrdRegPublicationGrp
{
    TrdRegPublicationType?: number;
    TrdRegPublicationReason?: number;
    convertToTags()
    {
        var obj = {};
        if (this.TrdRegPublicationType != undefined) {
            obj["2669"] = this.TrdRegPublicationType;
        }
        if (this.TrdRegPublicationReason != undefined) {
            obj["2670"] = this.TrdRegPublicationReason;
        }
        return obj;
    }
    static convertFromTags(obj:any){
        let myobj=new TrdRegPublicationGrp();
        if(obj.tags["2669"]!=undefined){
            myobj.TrdRegPublicationType=obj.tags["2669"];
        }
        if(obj.tags["2670"]!=undefined){
            myobj.TrdRegPublicationReason=obj.tags["2670"];
        }
        return myobj;
    }
}