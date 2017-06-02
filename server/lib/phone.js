module.exports = {
  send: (to, body, callback) => {
    console.log('Sms send not done: to - ', to, ', body - ', body); // eslint-disable-line no-console
    callback(null, { status: 'success' });
  }
};
