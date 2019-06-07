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
}