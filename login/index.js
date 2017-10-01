'use strict';

let database = require('../lib/mysql');
let _ = require('lodash');
let util = require('util');

module.exports = function (req, res, next) {
    let log = req.log;
    let body = req.body;

    let username = _.get(body, 'username');
    let password = _.get(body, 'password');

    let query = util.format("select * from users where username='%s'", username);
    log.info('query', query);
    
    database.select(query, function(result) {
        if (result && result.password === password) {
            res.json({ 'status': 'success' });
        } else {
            res.status(401).send();
        }
    });
};