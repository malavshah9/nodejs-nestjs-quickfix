export class RootParties
{
  
    RootPartyID:number;
    RootPartyIDSource:string;
    RootPartyRole:number;

    constructor(RootPartyID:number,RootPartyIDSource:string,RootPartyRole:number){
        this.RootPartyID=RootPartyID;
        this.RootPartyIDSource=RootPartyIDSource;
        this.RootPartyRole=RootPartyRole;
    }
    convertToTags(){
        var obj={
                "1117":this.RootPartyID,
                "1118":this.RootPartyIDSource,
                "1119":this.RootPartyRole
        };
        return obj;
    }
    static convertFromTags(obj:any){
        var myObj:RootParties;
            if(obj["1117"]!=undefined && obj["1118"]!=undefined && obj["1119"]!=undefined){
                myObj=new RootParties(obj["1117"],obj["1118"],obj["1119"]);
            }
            else{
                console.log("RootPartID not Defined");
            }
        return myObj;
    }
}