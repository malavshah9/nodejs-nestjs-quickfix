// var df = require('dateformat');
var events = require('events');
var quickfix = require('../index');
var common = require('./common');
var path = require('path');
var TCRAck=require('../src/DTO/TradeCaptureReportAck.dto')
var TCR_Class=require('../src/DTO/TCR_class.dto');
var initiator = quickfix.initiator;
var util=require('util');
var hashMap=require('../src/memory-map-service/memory-store');
var memoryService=require('../src/memory-map-service/memory-map.service');
var options = {
  credentials: {
    username: "USERNAME",
    password: "PASSWORD"
  },
  ssl : true,
  propertiesFile: path.join(__dirname, "initiator.properties"),
  storeFactory:'mysql'
};

// extend prototype
function inherits (target, source) {
  for (var k in source.prototype)
    target.prototype[k] = source.prototype[k];
}
inherits(initiator, events.EventEmitter);

var fixClient = new initiator(
{
  onCreate: function(sessionID) {
    console.log(" Session created ",sessionID);
  },
  onLogon: function(sessionID) {
    console.log(" Logged IN ",sessionID);
  },
  onLogout: function(sessionID) {
    console.log(" LoggedOut ",sessionID);
  },
  onLogonAttempt: function(message, sessionID) {
    console.log(" message with sequence number ",message.header["34"]," attempted logged in on session ",sessionID);
  },
  toAdmin: function(message, sessionID) {
    console.log(" toAdmin ", message);
    if(message!=undefined && message.header["35"]=="A"){
        message.tags["98"]=0;
        message.tags["108"]=20;
        message.tags["1137"]="FIX50SP2";
        message.tags["1407"]=222;
    }
    console.log(" message with sequence number ",message.header["34"]," sending message to admin on session ",sessionID);
  },
  fromAdmin: function(message, sessionID) {
    console.log(" fromAdmin ", message);
    console.log(" message with sequence number ",message.header["34"]," sending message from admin on session ",sessionID);
  },
  fromApp: function(message, sessionID) {
    console.log(" message with sequence number ",message.header["34"]," received message on session ",sessionID);
    if(message.header["35"]=="AR"){
      let obj=new TCRAck.TradeCaptureReportAck();
      let mess=obj.convertToField(message);
      let memoryMapService=new memoryService.MemoryMapService();
      memoryMapService.UpdateMap(hashMap.TCR_Map,mess,true);
    }
    else if(message.header["35"]=="AE"){
      let obj=new TCR_Class.TCR_class();
      let mess=obj.convertToField(message);
      let memoryMapService=new memoryService.MemoryMapService();
      memoryMapService.UpdateMap(hashMap.TCR_Map,mess,true);
    }
  }
}, options);
module.exports={
  fixClient:fixClient
};