let config;
if (process && process.env && process.env.NODE_ENV === 'prod') {
  console.log('NODE_ENV : ', process.env.NODE_ENV); // eslint-disable-line no-console
  config = require('./prod');
} else {
  console.log('NODE_ENV : ', 'dev'); // eslint-disable-line no-console
  config = require('./dev');
}
module.exports = config;
