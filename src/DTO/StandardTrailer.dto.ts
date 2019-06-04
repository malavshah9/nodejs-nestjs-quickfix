export class StandardTrailer
{
    CheckSum : string;
    converter()
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