var settings = require('./settings');
var express = require('express');
var app = express();
var routes = require('./routes');
var mw = require('./mw');

app
  .use('/', routes.base)
  .use('/users', routes.users)
  .use(mw.errorHandler)

app.listen(settings.server.port, function(err){
  if (err){
    console.error(err);
  }
  console.log('API is running listen on port: ' + settings.server.port);
});
