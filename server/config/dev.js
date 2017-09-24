const config = require('./global');
config.mongo.uri = 'mongodb://127.0.0.1:27017/selfwow';
config.mongo.db = 'selfwow';

config.email.sendAllow = false;

module.exports = config;
