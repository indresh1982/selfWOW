var config = require('./global');
//config.mongo.uri="mongodb://webdev:Dev_123@ds019471.mlab.com:19471/sharedindia";
// config.mongo.uri="mongodb://127.0.0.1:27017/sharedindia";
config.mongo.uri="mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/selfwow";
config.mongo.db = "selfwow";

config.email.sendAllow = true;

module.exports = config;