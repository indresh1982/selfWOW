// var phone = require('./../../lib/phone');
const collectionConfig = require('./../../config/collections');

module.exports = function () {
  const collectionUser = collectionConfig.collections.user;
  return {
    add: (db, Params, callback) => {
      const collection = db.collection(collectionUser);
      const projection = {};
      const args = { email: Params.email };

      collection.find(args, projection).toArray(function (err, result) {
        if (err) {
          callback(err, result);
        } else {
          if (result.length > 0) {
            callback(null, { status: false, error: 'Email is already register.' });
          } else {
            args.name = Params.name;
            args.phone = Params.phone;
            args.password = Params.password;
            args.ip = Params.ip;
            args.createDate = new Date();
            collection.insert(args, function (error, result2) {
              if (err) {
                callback(error, result2);
              } else {
                callback(null, { status: true });
              }
            });
          }
        }
      });
    },

    login: (db, Params, callback) => {
      const collection = db.collection(collectionUser);
      const projection = {};
      const args = { email: Params.email };

      collection.find(args, projection).toArray(function (err, result) {
        if (err) {
          callback(err, result);
        } else {
          if (result.length < 1) {
            callback(null, { status: false });
          } else {
            if (result[0] && result[0].password && Params.password === result[0].password) {
              callback(null, { status: true });
            } else {
              callback(null, { status: false });
            }
          }
        }
      });
    },

    verifyCode: (db, Params, callback) => {
      callback(null, { status: 'verifyCode success!', Params });
    },

    resendCode: (db, Params, callback) => {
      callback(null, { status: 'resendCode success!', Params });
    },

    logout: (db, Params, callback) => {
      callback(null, { status: 'logout success!', Params });
    }
  };
};
