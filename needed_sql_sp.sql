CREATE DEFINER=`dinodbadmin`@`192.168.%` 
PROCEDURE `dinodb`.`proc_tcr_nex_submit`(IN RTradeID int(11),
IN SecondaryTradeID varchar(20),
IN TrdRptStatus int(11),
IN Times timestamp,
IN timetype int(2),
IN TradePublishIndicator int(11),
IN TradeReportRejectReason int(11),
IN RejectText varchar(100),
IN WarningText varchar(100),
IN BusinessRejectRefID varchar(100),
IN BusinessRejectReason int(11),
IN BusinessRejectText varchar(100))
BEGIN
IF EXISTS (SELECT TradeId FROM dinodb.TCR_NEX WHERE TradeId=RTradeID) THEN
		IF timetype=1 THEN
			UPDATE dinodb.TCR_NEX SET SecondaryTradeID=SecondaryTradeID,TrdRptStatus=TrdRptStatus,ReceivedTime=ReceivedTime,TradePublishIndicator=TradePublishIndicator,TradeReportRejectReason=TradeReportRejectReason,RejectText=RejectText,WarningText=WarningText,BusinessRejectRefID=BusinessRejectRefID,BusinessRejectReason=BusinessRejectReason,BusinessRejectText=BusinessRejectText WHERE TradeId=RTradeID;
		ELSE
			UPDATE dinodb.TCR_NEX SET SecondaryTradeID=SecondaryTradeID,TrdRptStatus=TrdRptStatus,ReceivedTime=ReceivedTime,TradePublishIndicator=TradePublishIndicator,TradeReportRejectReason=TradeReportRejectReason,RejectText=RejectText,WarningText=WarningText,BusinessRejectRefID=BusinessRejectRefID,BusinessRejectReason=BusinessRejectReason,BusinessRejectText=BusinessRejectText WHERE TradeId=RTradeID;
		END IF;
ELSE
		IF timetype=1 THEN
			INSERT INTO dinodb.TCR_NEX VALUES(RTradeID,SecondaryTradeID,TrdRptStatus,Times,null,TradePublishIndicator,TradeReportRejectReason,RejectText,WarningText,BusinessRejectRefID,BusinessRejectReason,BusinessRejectText);
		ELSE
			INSERT INTO dinodb.TCR_NEX VALUES(RTradeID,SecondaryTradeID,TrdRptStatus,null,Times,TradePublishIndicator,TradeReportRejectReason,RejectText,WarningText,BusinessRejectRefID,BusinessRejectReason,BusinessRejectText);
		END IF;
END IF;
END;

---------------------------

CREATE DEFINER=`dinodbadmin`@`192.168.%` PROCEDURE `dinodb`.`proc_get_iress_left_tcr_nex`()
BEGIN
	SELECT it.*,tc.SecondaryTradeID,tc.TrdRptStatus,tc.ReceivedTime,tc.PublicallyReportedTime,tc.TradePublishIndicator,tc.TradeReportRejectReason,tc.RejectText,tc.WarningText,tc.BusinessRejectRefID,tc.BusinessRejectReason,tc.BusinessRejectText from  dinodb.iress_trade it LEFT JOIN dinodb.TCR_NEX tc ON tc.TradeId=it.trade_number;
END