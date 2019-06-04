export class StandardTrailer
{
    CheckSum : string;
    convertToTags()
    {
        var obj = {
            tags: {}
        };
        if (this.CheckSum != undefined) {
            obj.tags["10"] = this.CheckSum;
        }
        return obj;
    }
}