export class TradePriceConditionGrp
{
        TradePriceCondition?:number;
        convertToTags(){
                if(this.TradePriceCondition!=undefined)
                {
                    var obj={
                        "1839":this.TradePriceCondition
                     };
                     return obj;
                }
        }  
        static convertFromTags(obj:any){
                let myobj=new TradePriceConditionGrp();
                if(obj.tags["1839"]!=undefined)
                {
                        myobj.TradePriceCondition=obj.tags
                }
                return myobj;
        }  
}