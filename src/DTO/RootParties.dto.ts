export class RootParties
{
  
    RootPartyID:number;
    RootPartyIDSource:string;
    RootPartyRole:number;

    constructor(RootPartyID:number,RootPartyIDSource:string,RootPartyRole:number,)
    {
        this.RootPartyID=RootPartyID;
        this.RootPartyIDSource=RootPartyIDSource;
        this.RootPartyRole=RootPartyRole;
    }
    convertToTags()
    {
        var obj={
                "1117":this.RootPartyID,
                "1118":this.RootPartyIDSource,
                "1119":this.RootPartyRole
        };
        return obj;
    }
}