export class SecAltIDGrp
{
    SecurityAltID?: string;
    SecurityAltIDSource?: string;
    convertToTags()
    {
        var obj = {};
        if (this.SecurityAltID != undefined) {
            obj["455"] = this.SecurityAltID;
        }
        if (this.SecurityAltIDSource != undefined) {
            obj["456"] = this.SecurityAltIDSource;
        }
    }
}