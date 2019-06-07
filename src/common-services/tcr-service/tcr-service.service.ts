import { Injectable } from '@nestjs/common';
import { TCR_class } from 'src/DTO/TCR_class.dto';
import { RootParties } from 'src/DTO/RootParties.dto';
import { instrument } from 'src/DTO/Instrument.dto';
import { TrdCapRptSideGrp } from 'src/DTO/TrdCapRptSideGrp.dto';
import { HeaderServiceService } from '../header-service/header-service.service';

@Injectable()
export class TcrServiceService {
    constructor(private headerService: HeaderServiceService){}
    getTCRReportDemoObj(){
        // let obj:TCR_class;
        // obj=new TCR_class('1xsasdfdf',0,'1',2,[
        //     new RootParties(12,'G',3),
        //     new RootParties(10,'E',3)
        // ],'O',new instrument('BAC','0X1213','4'),12,23,'CNY','SINT','20190605','20190605-15:43:07.189',1,[new TrdCapRptSideGrp('1')],1,11);
        // let packet={
        //     header:this.headerService.getHeader("AE").converter(),
        //     tags:obj.converter()
        // };
        // return packet;
    }
}
