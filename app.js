const http = require('http');
const express = require('express');
const config = require('./config');

const app = require('./config/express')();
const server = http.createServer(app);

require('./routers')(express, app);

server.listen( config.port, config.host, function() {
    console.log('Express server on port ' + config.port);
});

module.exports = server;
