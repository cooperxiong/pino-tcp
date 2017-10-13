/**
 * Created by Cooper on 2017/10/11.
 */
const Socket = require('net').Socket;
const pinoStream = require('pino-multi-stream');
const socket = new Socket();
module.exports = function (config) {
    if (!config.host || !config.port) {
        throw new Error('host and port are needed')
    }
    config.child = config.child || {};
    let tcpStream = socket.connect({
        host: config.host,
        port: config.port,
    });
    return pinoStream({
        streams: [
            {level: 'debug', stream: process.stdout},
            {level: 'info', stream: tcpStream}
        ]
    }).child(config.child);
};

/*
var levels = {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
}
*/


