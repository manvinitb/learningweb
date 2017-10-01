'use strict';

let express = require('express');

let UTIL = require('util'),
  PATH = require('path'),
  HTTP = require('http'),
  BODYPARSER = require('body-parser'),
  CONFIG = require('./configuration'),
  ROUTES = require('./routes'),
  _ = require('lodash'),
  APP = express(),
  MYSQL = require('./lib/mysql'),
  PORT = _.get(process, 'env.PORT', 3000);

_.set(HTTP, 'globalAgent.maxSockets', 1000);

//configuring middlewared
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({
  extended: false
}));

let bunyanLogger = require('bunyan').createLogger({
  name: 'myapp'
});

MYSQL.setLogger(bunyanLogger);

var logger = function (req, res, next) {
  req.log = bunyanLogger;
  next();
};

APP.use(logger);

ROUTES(APP);

APP.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});