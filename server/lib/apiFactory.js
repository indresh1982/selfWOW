// Singleton
var Singleton = {
  // Api Request Handler
  apiRequestHandler: function (req, res, reqPara, repoMethod) {
    var args = {};
    if(req.body || reqPara.length == 0) {
      for (var i = 0; i < reqPara.length; i++) {
        if (req.body[reqPara[i]]) {
          args[reqPara[i]] = req.body[reqPara[i]];
        } else {
          res.send({ error: 'Required parameter is missing.', missingFieldName: reqPara[i] }); //required field missing
          return;
        }
      }
    } else {
      res.send({ error: 'Body is required.',  }); //Body is missing
      return;
    }
    args.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    repoMethod(req.db, args, function(err, result) {
      if(err) {
        res.send(err);
        return;
      }
      res.send(result);
    });
  }
};

// exports
module.exports = Singleton;
