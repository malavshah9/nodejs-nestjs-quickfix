import { Parties } from "./Parties.dto";

export class TrdCapRptSideGrp
{
    Side:string;
    Parties?:Parties; //Group
    LastCapacity?:string;
    NoPartyIDs?:number;
    
    constructor(Side:string)
    {
        this.Side=Side;
    }
}