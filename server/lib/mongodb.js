var MongoClient = require('mongodb').MongoClient;
var config = require('./../config');

// Singleton
var Singleton = {
  // mongoHandler
  mongoHandler: function (req, res, next) {
    MongoClient.connect(config.mongo.uri, function(err, db) {
      if(!err) {
        req.db = db;
      } else {
        console.log('mongoDb Connection Error!!!');
      }
      next();
    });
  }
};

// exports
module.exports = Singleton;
