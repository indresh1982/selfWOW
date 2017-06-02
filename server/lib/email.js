const config = require('./../config');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(config.email.auth);

module.exports = {
  send: (to, body, callback) => {
    const email = Object.create(config.email.verifyInfo);
    email.to = to;
    email.html = body;
    // console.log('config.email.sendAllow : ', config.email.sendAllow);
    if (config.email.sendAllow) {
      transporter.sendMail(email, (emailError) => {
        if (emailError) {
          callback(null, { error: 'Email Send Failed.' });
        } else {
          callback(null, { status: 'success' });
        }
      });
    } else {
      console.log('Email Send is disable in config.'); // eslint-disable-line no-console
      callback(null, { status: 'success' });
    }
  }
};
