## Description

This project is developed for receiving and sending TCR and TCRAck message of [FIX](https://www.onixs.biz) Protocol.

Three parts of this project.
1. Incoming Message:
    
    1. [ActiveMQ](http://activemq.apache.org):  I have used stompit npm package to subscribe the topic on activeMQ.I have written XML Parsing which parses the XML file received from topic in ActiveMQ and than makes the TCR Message.

    2. Database: Data which are not yet submitted to NEX server which will be activated when following api called after starting all server whose TrdRptStatus(939) is 1 or null which means Trade Rejected or not yet submitted.
    
        [GET] http://localhost:3000/submitTradeToNex

2. Internal Processing:
    
    1. TCR Message will be made by calling TCRClass constructor.
    
    2. Hashmap will be maintained when TCR/TCRAck are received and sent till we get TradePublishIndicator(1390) as 3 which means Trade is published.
    
3. Outgoing Message:

    1. TCR message will be sent after internal processing to NEX server by QuickFix Client using preconfigured parameters. 



## Framework and Tools Used

1. [Node.js](https://nodejs.org/en/) JavaScript run-time environment that executes JavaScript code outside of a browser.

2. [Nest](https://github.com/nestjs/nest) Framework TypeScript for Node.js project.

3. [QuickFIX Node.js Wrapper](https://github.com/Trumid/node-quickfix) For quickfix enginee support.

4. [ActiveMQ Messaging Server](http://activemq.apache.org/) ActiveMQ server for Stompit subscription.


## Installation

Install the above mentioned tools and clone this repository.
After clonning this repository run following commnad from root directory.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
