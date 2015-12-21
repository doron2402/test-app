var settings = require('./settings');
var ejs =  require('ejs');
var app = express();

app
.use('/', express.static(__dirname + '/public'))
.use('/public', express.static(__dirname + '/public'));

app.listen(settings.server.port, function(err){
  if (err){
    console.error(err);
  }
  console.log('Hi Server is running listen on port: ' + settings.server.port);
});
