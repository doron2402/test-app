var settings = require('./settings');
var express = require('express');
var ejs =  require('ejs');
var app = express();
var routes = require('./routes');
var mw = require('./mw');

app.engine('.html',ejs.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app
  .use('/', routes.base)
  .use('/users', routes.users)
  .use(mw.errorHandler);

app.listen(settings.server.port, function(err){
  if (err){
    console.error(err);
  }
  console.log('Hi Server is running listen on port: ' + settings.server.port);
});
