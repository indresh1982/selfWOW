// var phone = require('./../../lib/phone');
var collectionConfig = require('./../../config/collections');

module.exports = function() {
  var collectionUser = collectionConfig.collections.user;
  return {
    add: function (db, Params, callback) {
      var collection = db.collection(collectionUser);
      var projection = {};
      var args = { email: Params.email };

      collection.find(args, projection).toArray(function (err, result) {
        if(err) {
          callback(err, result);
        } else {
          if(result.length > 0) {
            callback(null, { status: false, error: 'Email is already register.'});
          } else {
            args.name = Params.name;
            args.phone = Params.phone;
            args.password = Params.password;
            args.ip = Params.ip;
            args.createDate = new Date();
            collection.insert(args, function (error, result) {
              if(err) {
                callback(error, result);
              } else {
                callback(null, { status: true });
              }
            });
          }
        }
      });
    },

    login: function (db, Params, callback) {
      var collection = db.collection(collectionUser);
      var projection = {};
      var args = { email: Params.email };

      collection.find(args, projection).toArray(function (err, result) {
        if(err) {
          callback(err, result);
        } else {
          if(result.length < 1) {
            callback(null, { status: false });
          } else {
            if(result[0] && result[0].password && Params.password === result[0].password) {
              callback(null, { status: true });
            } else {
              callback(null, { status: false });
            }
          }
        }
      });
    },

    verifyCode: function (db, Params, callback) {
      callback(null, { status: 'verifyCode success!', Params: Params });
    },

    resendCode: function (db, Params, callback) {
      callback(null, { status: 'resendCode success!', Params: Params });
    },

    logout: function (db, Params, callback) {
      callback(null, { status: 'logout success!', Params: Params });
    }
  }
};
