'use strict';

let login = require('../login');

module.exports = function (app) {
    app.get('/', function(req, res, next) {
        req.log.info('hit done');
        res.end();
    });

    app.post('/login', function(req, res, next) {
        login(req, res, next);
    });
    
};