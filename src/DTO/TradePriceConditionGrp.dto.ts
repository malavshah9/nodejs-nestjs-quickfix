export class TradePriceConditionGrp
{
        TradePriceCondition?:number;
        async convertToTags(){
                if(this.TradePriceCondition!=undefined)
                {
                    var obj={
                        "1839":this.TradePriceCondition
                     };
                     return obj;
                }
        }  
        static async convertFromTags(obj:any){
                let myobj=new TradePriceConditionGrp();
                if(obj.tags["1839"]!=undefined)
                {
                        myobj.TradePriceCondition=obj.tags
                }
                return myobj;
        }  
}