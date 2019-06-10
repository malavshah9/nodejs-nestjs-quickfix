import {Parties} from "./Parties.dto";
import {groups} from "./groups.dto";
import {listenerCount} from "cluster";

export class TrdCapRptSideGrp
{
    Side : string;
    Parties?: Parties[]; //Group
    LastCapacity?: string;
    NoPartyIDs?: number;

    convertToTags() {
        var obj : {};
        if (this.Side != undefined) {
            obj["54"] = this.Side;
        }
        if (this.LastCapacity != undefined) {
            obj["29"] = this.LastCapacity;
        }
        if (this.NoPartyIDs != undefined && this.NoPartyIDs == this.Parties.length) {
            obj["453"] = this.NoPartyIDs;
            let tobj : groups;
            tobj.index = 453;
            tobj.delim = 448;
            var partyList = [];
            this.Parties.forEach(elemet => {
                    partyList.push(elemet.convertToTags());
                });
            tobj.entries = partyList;
            obj["groups"] = tobj;
        }

        return obj;
    }
}
