var events = require('events');
var path = require('path');
var common = require('./common');
var quickfix = require('../index');
var fixAcceptor = quickfix.acceptor;

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
    console.log(" Session created ", sessionID);
  },
  onLogon: function (sessionID) {
    // setInterval(() => {
    //   let obj = {
    //     header: {
    //       8: 'FIXT.1.1',
    //       35: 'AR',
    //       49: "ACCEPTOR",
    //       56: "INITIATOR"
    //     },
    //     tags: {
    //       1003: tradeID++,
    //       1040: 12,
    //       856: 0,
    //       939: 3,
    //       828: 0,
    //       // 1328: 'Nothing',
    //       2520: 'Warning',
    //     }
    //   };
    //   fixServer.send(obj, function () {
    //     console.log("TCRAck sent");
    //   });
    // }, 10000);
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
    console.log(" message with sequence number ", message.header["34"], " received message on session ", sessionID);
    if (message.groups != undefined) {
      for (element in message.groups) {
        console.log(" Group name: ", element);
        console.log(" Object: ", message.groups[element]);
      }
    }
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