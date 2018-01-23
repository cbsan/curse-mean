var app = require('./config/express')();
require('./config/database')('mongodb://db:27017/local');

module.exports = app;
