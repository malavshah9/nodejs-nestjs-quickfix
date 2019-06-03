import { Parties } from "./Parties.dto";

export class TrdCapRptSideGrp
{
    NoSides:number;
    Side:string;
    Parties?:Parties; //Group
    LastCapacity?:string;

    constructor(NoSides:number,Side:string)
    {
        this.NoSides=NoSides;
        this.Side=Side;
    }
}