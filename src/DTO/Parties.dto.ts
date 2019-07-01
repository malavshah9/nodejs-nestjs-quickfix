export class Parties
{
    PartyID?: string;
    PartyIDSource?: string;
    PartyRole?: number;

    async convertToTags()
    {
        let obj = {};
        if (this.PartyID != undefined) {
            obj["448"] = this.PartyID;
        }
        if (this.PartyIDSource != undefined) {
            obj["447"] = this.PartyIDSource;
        }
        if (this.PartyRole != undefined) {
            obj["452"] = this.PartyRole;
        }
        return obj;
    }
    static async convertFromTags(objs:any){
        let obj = new Parties();
        if ( objs["448"] != undefined) {
            obj.PartyID= objs["448"];
        }
        if ( objs["447"] != undefined) {
            obj.PartyIDSource = objs["447"];
        }
        if ( objs["452"] != undefined) {
            obj.PartyRole =objs["452"];
        }
        return obj;
    }
}