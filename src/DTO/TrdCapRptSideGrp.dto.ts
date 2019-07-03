import { Parties } from "./Parties.dto";
// import {groups} from "./groups.dto";
import { listenerCount } from "cluster";
const util = require('util');
export class TrdCapRptSideGrp {
    Side: string;
    Parties?: Parties[]; //Group
    LastCapacity?: string;
    NoPartyIDs?: string;
    constructor(public side: string) {
        this.Side = side;
    }
    static async convertFromTags(obj: any) {
        var myobj: TrdCapRptSideGrp;
        if (obj["54"] != undefined) {
            myobj = new TrdCapRptSideGrp(obj["54"]);
            if (obj["29"] != undefined) {
                myobj.LastCapacity = obj["29"];
            }
            if (obj.groups != undefined)
                if (obj.groups["453"] != undefined) {
                    let PartiesList: Parties[] = [];
                    let noParties = 0;
                    obj.groups["453"].forEach(async element => {
                        PartiesList.push(await Parties.convertFromTags(element.tags));
                        noParties++;
                    });
                    myobj.NoPartyIDs = noParties + "";
                    myobj.Parties = PartiesList;
                }
                else {
                    console.log(" Tag 453 mismatch with its component");
                }
        }
        else {
            console.log("Tag 54 not defined");
        }
        return myobj;
    }
    async convertTags(obj: any) {
        // var obj = {};
        if (this.Side != undefined) {
            obj["54"] = this.Side;
        }
        if (this.LastCapacity != undefined) {
            obj["29"] = this.LastCapacity;
        }
        if (this.NoPartyIDs != undefined && this.Parties != undefined) {
            obj["453"] = this.NoPartyIDs;
        }
        // return obj;
    }
    async convertGroups(obj: any) {
        // var obj_t:any={};
        if (this.NoPartyIDs != undefined && this.Parties != undefined) {
                var element_grp = {};
                element_grp["index"] = 453;
                element_grp["delim"] = 448;
                var parties_list = [];
                await this.Parties.forEach(async element => {
                    parties_list.push(await element.convertToTags());
                });
                element_grp["entries"] = parties_list;
                // await console.log(" element_grp ",element_grp);
                obj.groups.push(element_grp);
                // obj_t.push(element_grp);
        }

        // return obj_t;
    }
    async convertToTags() {
        let obj = {
            groups: []
        };
        await this.convertTags(obj);
        await this.convertGroups(obj);
        // console.log(" inside obj ",obj.groups);
        // console.log(" test ",obj["453"]);
        // obj.groups.forEach(element => {
        //         console.log(" element in for loop ",element);
        // });
        // let obj_final={
        //     groups:await this.convertGroups()
        // };
        // console.log(" inside convertToTags() ");
        // console.log(util.inspect(obj_final, false, null, true /* enable colors */));
        return obj;
    }
}
