import {Parties} from "./Parties.dto";
// import {groups} from "./groups.dto";
import {listenerCount} from "cluster";

export class TrdCapRptSideGrp
{
    Side : string;
    Parties?: Parties[]; //Group
    LastCapacity?: string;
    NoPartyIDs?: number;
    constructor(public side:string){
        this.Side=side;
    }
    static convertFromTags(obj:any){
        var myobj:TrdCapRptSideGrp;
        if(obj["54"]!=undefined){
            myobj=new TrdCapRptSideGrp(obj["54"]);
            if(obj["29"]!=undefined){
                myobj.LastCapacity=obj["29"];
            }
            if(obj.groups!=undefined)
           if(obj.groups["453"]!=undefined){
            let PartiesList:Parties[]=[];
            let noParties=0;
            obj.groups["453"].forEach(element=>{
                PartiesList.push(Parties.convertFromTags(element.tags));
                noParties++;
            });
            myobj.NoPartyIDs=noParties;
            myobj.Parties=PartiesList;
           }
           else{
               console.log(" Tag 453 mismatch with its component");
           }
        }
        else{
            console.log("Tag 54 not defined");
        }
        return myobj;
    }
    convertTags(){
        var obj = {};
        if (this.Side != undefined) {
            obj["54"] = this.Side;
        }
        if (this.LastCapacity != undefined) {
            obj["29"] = this.LastCapacity;
        }
        if (this.NoPartyIDs != undefined && this.Parties!=undefined) {
            if(this.NoPartyIDs==this.Parties.length)
            {
                console.log("inside if of this.NoPartIDs ",this.NoPartyIDs);
                obj["453"] = this.NoPartyIDs;
            }
            else{
                console.log("Error in NoPartyIds in TrdCapRptSideGrp");
            }
        }
        return obj;
    }
    convertGroups(){
        var obj_t:any[]=[];
        if (this.NoPartyIDs != undefined && this.Parties!=undefined) {
            if(this.NoPartyIDs==this.Parties.length)
            {
                var element_grp={};
                element_grp["index"]=453;
                element_grp["delim"]=447;
                var parties_list=[];
                this.Parties.forEach(element => {
                    parties_list.push(element.convertToTags());
                });
                element_grp["entries"]=parties_list;
                obj_t.push(element_grp);
            }
            else{
                console.log("Error in NoPartyIds in TrdCapRptSideGrp");
            }
        }
        return obj_t;
    }
    convertToTags() {
            var obj_final={
                tags:this.convertTags(),
                groups:this.convertGroups()
            };
            return obj_final;
        }
}
