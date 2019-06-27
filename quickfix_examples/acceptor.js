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

inherits(fixAcceptor, events.EventEmitter);
var tradeID = 0;
var fixServer = new fixAcceptor({
  onCreate: function (sessionID) {
    // console.log(" Session created ", sessionID);
  },
  onLogon: function (sessionID) {
    let cnt=0;
    let TCR={
      header:
        { 8: 'FIXT.1.1',
          35: 'AE',
          49: 'ACCEPTOR',
          56: 'INITIATOR' },
       tags:
        { 15: 'CNY',
          22: '4',
          30: 'MIC',
          31: 4500,
          32: 120,
          48: '0X1213',
          55: 'BAC',
          60: '20190625-18:55:51.579',
          75: '20190625',
          423: '1',
          552: 1,
          856: 0,
          1003: '1234',
          1116: 0,
          1924: 0,
          1934: 11 },
       groups:
        [ { index: 552, delim: 54, entries: [{
          54: '2'
        }] } ] 
    };
    setInterval(() => {
      if(cnt>=5){
        cnt=0;
      }
      fixServer.send(testTCRArr.TestArr[cnt], function () {
        console.log("TCR sent",testTCRArr.TestArr[cnt]);
        cnt++;
      });
    }, 10000);
    console.log(" Logged IN ", sessionID);
  },
  onLogout: function (sessionID) {
    // console.log(" LoggedOut ", sessionID);
  },
  onLogonAttempt: function (message, sessionID) {
    // console.log(" message with sequence number ", message.header["34"], " attempted logged in on session ", sessionID);
  },
  toAdmin: function (message, sessionID) {
    // console.log(" message with sequence number ", message.header["34"], " sending message to admin on sessionID ", sessionID);
  },
  fromAdmin: function (message, sessionID) {
    // console.log(" message with sequence number ", message.header["34"], " sending message from admin on session ", sessionID);
  },
  fromApp: function (message, sessionID) {
    // console.log(util.inspect(message, false, null, true /* enable colors */ ))
    console.log(" message with sequence number ", message.header["34"], " received message on session ", sessionID);
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
        fixServer.send(TCR,(TCR)=>{
          console.log("Message from Server sent ",TCR);
        });
    // if (message.groups != undefined) {
    //   for (element in message.groups) {
    //     console.log(" Group name: ", element);
    //     console.log(" Object: ", message.groups[element]);
    //   }
    // }
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