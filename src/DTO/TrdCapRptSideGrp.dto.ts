import { Parties } from "./Parties.dto";

export class TrdCapRptSideGrp
{
    Side:string;
    Parties?:Parties[]; //Group
    LastCapacity?:string;
    NoPartyIDs?:number;
    
    constructor(Side:string)
    {
        this.Side=Side;
    }
    getGroups(){
        let obj={
            index: 0,
            delim: 0,
            entries: []
        };
        obj["54"]=this.Side;
        if(this.NoPartyIDs!=undefined && this.NoPartyIDs!=0){
            if(this.NoPartyIDs==this.Parties.length) {
                obj["453"]=this.Parties.length;
                obj.index=453;
                obj.delim=448;
                this.Parties.forEach(element => {
                    let temp;
                    if (element.PartyID != undefined){
                        temp["448"]=element.PartyID;
                    }
                    if (element.PartyIDSource != undefined){
                        temp["447"]=element.PartyID;
                    }
                    if (element.PartyRole != undefined){
                        temp["452"]=element.PartyID;
                    }
                    obj.entries.push(temp);
                });
                // return obj;
            }
            else{
                console.log("Invalid TrdCapRptSideGrp in the package.")
            }
        }
        return obj;
    }
}
