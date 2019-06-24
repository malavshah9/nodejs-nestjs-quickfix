/*
    stompit(activeMQ) server configuration file
*/
export var stompit = require('stompit');
export const connectParams = {
    host: 'localhost',
    port: 61613,
    connectHeaders: {
        host: 'localhost',
        login: 'admin',
        passcode: 'password'
    }
};
export const reconnectOptions = {
    'initialReconnectDelay': 10,
    'milliseconds': 30000,
    'useExponentialBackOff': true,
    'maxReconnects': 5,
    'randomize': true,
    'connectFunction': stompit.connect
};
