const userRepository = require('./userRepository');
const apiFactory = require('./../../lib/apiFactory');

module.exports = function (params) {
  const options = params || { prefixPath: '/user/' };
  const repo = userRepository();

  return [{
    path: options.prefixPath + 'add',
    handler: (req, res) => {
      apiFactory.apiRequestHandler(
        req, res,
        ['name', 'phone', 'email', 'password'],
        repo.add
      );
    }
  }, {
    path: options.prefixPath + 'login',
    handler: (req, res) => {
      apiFactory.apiRequestHandler(
        req, res,
        ['email', 'password'],
        repo.login
      );
    }
  }, {
    path: options.prefixPath + 'verify',
    handler: (req, res) => {
      apiFactory.apiRequestHandler(
        req, res,
        ['phone', 'vCode'],
        repo.verifyCode
      );
    }
  }, {
    path: options.prefixPath + 'resend',
    handler: (req, res) => {
      apiFactory.apiRequestHandler(
        req, res,
        ['phone'],
        repo.resendCode
      );
    }
  }, {
    path: options.prefixPath + 'logout',
    handler: (req, res) => {
      apiFactory.apiRequestHandler(
        req, res,
        [],
        repo.logout
      );
    }
  }
  ];
};
