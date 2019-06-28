var events = require('events');
var path = require('path');
var common = require('./common');
var quickfix = require('../index');
var fixAcceptor = quickfix.acceptor;
const util = require('util')
var testTCRArr=require('./testing_examples');
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
let cnt=0;
inherits(fixAcceptor, events.EventEmitter);
var fixServer = new fixAcceptor({
  onCreate: function (sessionID) {
    console.log(" Session created ", sessionID);
  },
  onLogon: function (sessionID) {
    console.log(" Logged IN ", sessionID);
  },
  onLogout: function (sessionID) {
    console.log(" LoggedOut ", sessionID);
  },
  onLogonAttempt: function (message, sessionID) {
    console.log(" message with sequence number ", message.header["34"], " attempted logged in on session ", sessionID);
  },
  toAdmin: function (message, sessionID) {
    console.log(" message with sequence number ", message.header["34"], " sending message to admin on sessionID ", sessionID);
  },
  fromAdmin: function (message, sessionID) {
    console.log(" message with sequence number ", message.header["34"], " sending message from admin on session ", sessionID);
  },
  fromApp: function (message, sessionID) {
    console.log(" message with sequence number ", message.header["34"], " sending message from admin on session ", sessionID);
    // setInterval(() => {
      if(cnt>=5){
        cnt=0;
      }
      fixServer.send(testTCRArr.TCR_New_Arr[cnt], function () {
        console.log("TCR sent",testTCRArr.TCR_New_Arr[cnt]);
        cnt++;
      });
    
    // , 10000);
  }
}, {
  logonProvider: logonProvider,
  propertiesFile: path.join(__dirname, 'acceptor.properties'),
  storeFactory: 'mysql'
});
fixServer.start(function () {
  console.log("----------Quickfix Server Started----------");
  common.printStats(fixServer);
  process.stdin.resume();
});

/*
 var TCR={ header:
      { '8': 'FIXT.1.1',
        '35': 'AE',
        '49': 'ACCEPTOR',
        '56': 'INITIATOR' },
     tags:
      { '15': 'CNY',
        '22': '4',
        '30': 'SINT',
        '31': 455,
        '32': -2600,
        '48': '0X1213',
        '55': 'BAC',
        '60': '20180104-14:07:31.000',
        '75': '20180104',
        '423': '2',
        '552': 1,
        '856': 5,
        '1003': '7102448',
        '1040': '420',
        '1116': 1,
        '1924': 1,
        '1934': 11 },
     groups:
      [ { index: 552, delim: 54, entries: [{
        '54':'3'
      }] },
        { index: 1116, delim: 1117, entries: [{
          '1117':15,
          '1118':'G',
          '1119':3
        }] } ] };
*/