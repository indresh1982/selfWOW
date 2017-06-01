module.exports = {
  send: function (to, body, callback) {
    console.log('Sms send not done: to - ', to, ', body - ', body );
    callback(null, {status: 'success'});
  }
};
