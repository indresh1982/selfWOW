const MongoClient = require('mongodb').MongoClient;
const config = require('./../config');

// Singleton
const Singleton = {
  // mongoHandler
  mongoHandler: (req, res, next) => {
    MongoClient.connect(config.mongo.uri, (err, db) => {
      if (!err) {
        req.db = db; // eslint-disable-line no-param-reassign
      } else {
        console.log('mongoDb Connection Error!!!'); // eslint-disable-line no-console
      }
      next();
    });
  }
};

// exports
module.exports = Singleton;
