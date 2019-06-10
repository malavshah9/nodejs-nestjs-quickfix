export class Parties
{
    PartyID?: string;
    PartyIDSource?: string;
    PartyRole?: number;

    convertToTags()
    {
        var obj : {};
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
}