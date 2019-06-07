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
}