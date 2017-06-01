var userRepository = require('./userRepository');
var apiFactory = require('./../../lib/apiFactory');

module.exports = function(options) {
  options = options || { prefixPath: '/user/' };
  var repo = userRepository();

  return [{
      path: options.prefixPath + 'add',
      handler: function (req, res) {
        apiFactory.apiRequestHandler(
          req, res,
          ['name', 'phone', 'email', 'password'],
          repo.add
        );
      }
    }, {
    path: options.prefixPath + 'login',
    handler: function (req, res) {
      apiFactory.apiRequestHandler(
        req, res,
        ['email', 'password'],
        repo.login
      );
    }
  }, {
      path: options.prefixPath + 'verify',
      handler: function (req, res) {
        apiFactory.apiRequestHandler(
          req, res,
          ['phone', 'vCode'],
          repo.verifyCode
        );
      }
    }, {
      path: options.prefixPath + 'resend',
      handler: function (req, res) {
        apiFactory.apiRequestHandler(
          req, res,
          ['phone'],
          repo.resendCode
        );
      }
    }, {
      path: options.prefixPath + 'logout',
      handler: function (req, res) {
        apiFactory.apiRequestHandler(
          req, res,
          [],
          repo.logout
        );
      }
    }
  ];
}
