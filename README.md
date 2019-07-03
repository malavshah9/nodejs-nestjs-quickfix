## Description

This project is developed for receiving and sending TCR and TCRAck message of [FIX](https://www.onixs.biz) Protocol.

Three parts of this project are:
1. Incoming Message:
    
    1. [ActiveMQ](http://activemq.apache.org):  I have used stompit npm package to subscribe the topic on activeMQ.I have parsed XML file received from topic in ActiveMQ converting it into the TCR Message.
    
    2. TCR/TCRAck by quickfix enginee from NEX: This message will be handled inside initiator.js which is located inside 
    quickfix_examples directory.

    3. Database: Data which are not yet submitted to NEX server will be activated when following api is called after starting all servers whose TrdRptStatus(939) is 1 or null which means Trade Rejected or not yet submitted.
    
        [GET] http://localhost:3000/submitTradeToNex

2. Internal Processing:
    
    1. TCR Message will be made by calling TCRClass constructor.
    
    2. Hashmap will be maintained when TCR/TCRAck are received and sent till we get TradePublishIndicator(1390) as 3 which means Trade is published.
    
3. Outgoing Message:

    1. TCR message will be sent after internal processing to Stunnel server by QuickFix Client using preconfigured parameters. 

    2. Stunnel will send this TCR Message to NEX in encrypted form via SSL certificate to NEX.



## Framework and Tools Used

1. [Node.js](https://nodejs.org/en/) JavaScript run-time environment that executes JavaScript code outside of a browser.

2. [Nest](https://github.com/nestjs/nest) Typescript Framework for Node.js project.

3. [QuickFIX Node.js Wrapper](https://github.com/Trumid/node-quickfix) For quickfix enginee support.

4. [ActiveMQ Messaging Server](http://activemq.apache.org/) ActiveMQ server for stompit subscription.

5. [Stunnel](https://www.stunnel.org/) Stunnel Server for SSL connection to NEX

6. [Redis](https://redis.io/) Data structure server for receiving messages

## Installation

Install the above mentioned tools and clone this repository.
After clonning this repository run following commnad from root directory.

```bash
$ npm install
```



## Running the app

1. Starting Stunnel Server:

Before all step you have to start the stunnel server by following command in stunnel`s installation directory.

```bash
$ sudo stunnel
```

2. Start Redis Server

3. Start ActiveMQ Server

4. Start quickfix server for testing purpose

To start the quickfix server run following command inside quickfix_examples/

```bash
$ node acceptor.js
```
5. Start nodejs server and quickfix client

To start the gateway run following command in root directory.
```bash
$ npm run start
```

Follwing commands can be run for extra usage.

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
