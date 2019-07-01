export class SecAltIDGrp
{
    SecurityAltID?: string;
    SecurityAltIDSource?: string;
    async convertToTags()
    {
        var obj = {};
        if (this.SecurityAltID != undefined) {
            obj["455"] = this.SecurityAltID;
        }
        if (this.SecurityAltIDSource != undefined) {
            obj["456"] = this.SecurityAltIDSource;
        }
        return obj;
    }
    static async convertFromTags(obj:any){
        let myobj=new SecAltIDGrp();
        if(obj.tags["455"]!=undefined){
            myobj.SecurityAltID=obj.tags["455"];
        }
        if(obj.tags["456"]!=undefined){
            myobj.SecurityAltIDSource=obj.tags["456"];
        }
        return myobj;
    }
}