const MongoClient = require('mongodb').MongoClient;
const config = require('./../config');

// Singleton
const Singleton = {
  // mongoHandler
  mongoHandler: (req, res, next) => {
    if(!this.db) {
      MongoClient.connect(config.mongo.uri, (err, db) => {
        if (!err) {
          this.db = db;
          req.db = db; // eslint-disable-line no-param-reassign
        } else {
          console.log('mongoDb Connection Error!!!'); // eslint-disable-line no-console
        }
        next();
      });
    } else {
      req.db = this.db;
      next();
    }
  }
};

// exports
module.exports = Singleton;
