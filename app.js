var express = require('express');
var config = require('./server/config');
var mongodb = require('./server/lib/mongodb');
var routesFactory = require('./server/lib/routesFactory');
var bodyParser = require('body-parser');
var app = express();
var apiPublic = express.Router();
var apiProtected = express.Router();

var fs = require('fs');
var path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './public/base.html')).toString();

app.set('port', process.env.PORT||config.port||8080);

//static content and web app
console.log('Path client: ', __dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: config.bodyParser.uploadLimit}));

//Cross Domain Allow
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//database connection
app.use(mongodb.mongoHandler);

//public api register
app.use('/api/public', function (req, res, next) {
  if(String(req.method).toLowerCase() != 'post') {
    return res.send({method: 'Only POST Method is Allow!!!'}).status(405);
  }
  next();
});
app.use('/api/public', apiPublic);

//Protected api register
app.use('/api/protected', function (req, res, next) {
  var auth = true; //TODO need to check here login
  if(!auth) {
    return res.send({login:'failed'}).status(401);
  }
  if(String(req.method).toLowerCase() != 'post') {
    return res.send({method: 'Only POST Method is Allow!!!'}).status(405);
  }
  next();
});
app.use('/api/protected', apiProtected);

//test public route
apiPublic.use('/test', function (req, res) {
  res.send({result: 'test public route'});
});
routesFactory.setRoutes(apiPublic, require('./server/routes/user/userRoutes')());


//test protected route
apiProtected.use('/test', function (req, res) {
  res.send({result: 'test protected route'});
});

// routesFactory.setRoutes(apiProtected, require('./routes/user/userRoutes')());

//root app html
app.use('/', function (req, res) {
  let javascript = `<script type='text/javascript'>var appRouterPath = 'test/path'; var isAppReady = true; var apiServerPath = 'http://localhost:8080'; </script>`;
  const markup = html.replace('JAVASCRIPT', javascript);
  res.set('Content-Type', 'text/html');
  res.status(200).end(markup);
});

//redirect all invalid path to root
app.get('/*', function(req, res) {
  res.redirect('/')
});


module.exports = app;
