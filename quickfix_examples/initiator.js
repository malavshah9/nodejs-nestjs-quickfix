// var df = require('dateformat');
var events = require('events');
var quickfix = require('../index');
var common = require('./common');
var path = require('path');
var TCRAck=require('../src/DTO/TradeCaptureReportAck.dto')
var initiator = quickfix.initiator;
var util=require('util');

var options = {
  credentials: {
    username: "USERNAME",
    password: "PASSWORD"
  },
  ssl : true,
  propertiesFile: path.join(__dirname, "initiator.properties")
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
    console.log("onCreate called");
    // fixClient.emit('onCreate', common.stats(fixClient, sessionID));
  },
  onLogon: function(sessionID) {
    console.log("onLogon called");
    // fixClient.emit('onLogon', common.stats(fixClient, sessionID));
    //Done 
  },
  onLogout: function(sessionID) {
    console.log("onLogout called");
    // fixClient.emit('onLogout', common.stats(fixClient, sessionID));
  },
  onLogonAttempt: function(message, sessionID) {
    console.log("onLogonAttempt called");
    // fixClient.emit('onLogonAttempt', common.stats(fixClient, sessionID, message));
  },
  toAdmin: function(message, sessionID) {
    console.log("toAdmin called");
    // fixClient.emit('toAdmin', common.stats(fixClient, sessionID, message));
  },
  fromAdmin: function(message, sessionID) {
    console.log("fromAdmin called");
    // fixClient.emit('fromAdmin', common.stats(fixClient, sessionID, message));
  },
  fromApp: function(message, sessionID) {
    console.log("fromApp Called");
    if(message.header["35"]=="AR")
    {
      var obj=new TCRAck.TradeCaptureReportAck();
      var mess=obj.convertToField(message);
      mess.submitToDatabase(new Date().toString(),1);
      // console.log(mess);
      // console.log(util.inspect(mess, {showHidden: false, depth: null}));
    }
    // fixClient.emit('fromApp', common.stats(fixClient, sessionID, message));
  }
}, options);
module.exports={
  fixClient:fixClient
};
// fixClient.start(function() {
// 	console.log("FIX Initiator Started");
//   var order = {
//     header: {
//       8: 'FIX.4.4',
//       35: 'D',
//       49: "INITIATOR",
//       56: "ACCEPTOR"
//     },
//     tags: {
//       11: "0E0Z86K00000",
//       48: "06051GDX4",
//       22: 1,
//       38: 200,
//       40: 2,
//       54: 1,
//       55: 'BAC',
//       218: 100,
//       60: df(new Date(), "yyyymmdd-HH:MM:ss.l"),
//       423: 6
//     }
//   };

//   fixClient.send(order, function() {
//     console.log("Order sent!");
//     common.printStats(fixClient);
//     process.stdin.resume();
//   });
// });
