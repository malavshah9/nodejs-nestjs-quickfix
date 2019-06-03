export class StandardTrailer
{
    CheckSum:string;
    convertToTags()
    {
        var obj={
            tags:
            {
                "10":this.CheckSum
            }
        };
        return obj;
    }
}