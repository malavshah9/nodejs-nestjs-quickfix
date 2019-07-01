export class StreamGrp
{
    StreamNotional?: number;
    StreamCurrency?: number;
    async convertToTags(){
        var obj = {};
        if (this.StreamNotional != undefined) {
            obj["40054"] = this.StreamNotional;
        }
        if (this.StreamCurrency != undefined) {
            obj["40055"] = this.StreamCurrency;
        }
        return obj;
    }
}