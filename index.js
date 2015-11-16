var settings = {
  port: 3000
};
var express = require('express');
var ejs =  require('ejs');
var app = express();
var routes = require('./routes');
var mw = require('./mw');

app.engine('.html',ejs.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');


app.use('/users', routes.users);
app.use(mw.errorHandler);
app.use('/public', express.static(__dirname + '/public'));

app.listen(settings.port, function(err){
  if (err){
    console.error(err);
  }
  console.log('Hi Server is running listen on port: ' + settings.port);
});
