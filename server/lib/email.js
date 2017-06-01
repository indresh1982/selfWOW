var config = require('./../config');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(config.email.auth);

module.exports = {
  send: function (to, body, callback) {
    var email = Object.create(config.email.verifyInfo);
    email.to = to;
    email.html = body;
    console.log('config.email.sendAllow : ', config.email.sendAllow);
    if(config.email.sendAllow) {
      transporter.sendMail(email, function (emailError, info) {
        if (emailError) {
          callback(null, { error: 'Email Send Failed.' });
        } else {
          callback(null, { status: 'success' });
        }
      });
    } else {
      console.log('Email Send is disable in config.');
      callback(null, { status: 'success' });
    }
  }
};
