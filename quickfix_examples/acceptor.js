var events = require('events');
var path = require('path');
var common = require('./common');
var quickfix = require('../index');
var fixAcceptor = quickfix.acceptor;
// var TCRAck=require('../src/DTO/TradeCaptureReportAck.dto');

var logonProvider = new quickfix.logonProvider(function (logonResponse, msg, sessionId) {
  if (msg.tags[553] == 'USERNAME' && msg.tags[554] == 'PASSWORD') {
    logonResponse.done(true);
  } else {
    logonResponse.done(false);
  }
});

// extend prototype
function inherits(target, source) {
  for (var k in source.prototype)
    target.prototype[k] = source.prototype[k];
}

inherits(fixAcceptor, events.EventEmitter);

var fixServer = new fixAcceptor(
  {
    onCreate: function(sessionID) {
      console.log("onCreate called");
      // fixClient.emit('onCreate', common.stats(fixClient, sessionID));
    },
    onLogon: function(sessionID) {
      console.log("onLogon called");
      setInterval(()=>{
        let obj = {
          header: {
            8: 'FIXT.1.1',
            35: 'AR',
            49: "ACCEPTOR",
            56: "INITIATOR"
          },
          tags: {
            1003: 10,
            1040: 12,
            856: 0,
            939: 3,
            828: 0,
            // 1328: 'Nothing',
            2520: 'Warning',
          }
        };
        fixServer.send(obj,function(){
          console.log("TCRAck sent",obj);
        });
      },10000);
      // fixClient.emit('onLogon', common.stats(fixClient, sessionID));
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
      if(message.groups!=undefined){
        for(element in message.groups)
          {
            console.log("Group name: ",element);
            console.log("Object: ",message.groups[element]);
          }
      }
      
      console.log("fromApp called",message);
      // fixClient.emit('fromApp', common.stats(fixClient, sessionID, message));
    }
  }, {
    logonProvider: logonProvider,
    propertiesFile: path.join(__dirname, 'acceptor.properties'),
    storeFactory:'mysql'
  });

// ['onCreate',
//   'onLogon',
//   'onLogout',
//   'onLogonAttempt',
//   'toAdmin',
//   'fromAdmin',
//   'fromApp']
//   .forEach(function (event) {
//     fixServer.on(event, console.log.bind(null, event));
//   });

fixServer.start(function () {
  console.log("FIX Acceptor Started");
  common.printStats(fixServer);
  process.stdin.resume();
});