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
    // convertToTags()
    // {
    //     var obj={
    //         tags:{
    //             "1116":this.NoRootPartyIDs,
    //             "1117":this.RootPartyID,
    //             "1118":this.RootPartyIDSource,
    //             "1119":this.RootPartyRole
    //         }
    //     };
    //     console.log(obj);
    //     return obj;
    // }
}