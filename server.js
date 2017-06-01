var server = require('./app');
server.listen(server.get('port'), function () {
  console.log('Server listen at Port: ', server.get('port'));
  console.log('Dev: http://localhost:' + server.get('port') + '/');
});