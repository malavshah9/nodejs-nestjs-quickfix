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
}