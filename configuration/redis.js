'use strict';

var prod = {

};

var staging = {

};

var local = {

};

if(process.env.NODE_ENV === 'production') {
    module.exports = prod;
} else if (process.env.NODE_ENV === 'staging') {
    module.exports = staging;
} else {
    module.exports = local;
}