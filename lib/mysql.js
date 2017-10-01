'use strict';

let CONFIG = require('../configuration').mysql;
let _ = require('lodash');
let log;
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: _.get(CONFIG, 'host'),
    user: _.get(CONFIG, 'user'),
    password: _.get(CONFIG, 'password'),
    database: _.get(CONFIG, 'database')
});

connection.connect();
 
module.exports = {
    select: function (query, cb) {
       
        connection.query(query, function (error, results, fields) {
            if (error) {
                log.error('mysql::error', error);
                return cb();
            } else {
                log.info('result', results[0]);

                return cb(results[0]);
            }
        });
    },

    update: function () {

    },

    insert: function () {

    },

    setLogger: function(logger) {
        log = logger;
    }

};