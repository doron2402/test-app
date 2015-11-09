var lodash = require('lodash');
// Dummy users
var users = [
  { id : 1, name: 'tobi', email: 'tobi@learnboost.com' },
  { id : 2, name: 'loki', email: 'loki@learnboost.com' },
  { id : 3, name: 'jane', email: 'jane@learnboost.com' }
];

var usersController = {};

usersController.showAll = function(req, res){
  return res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
};

usersController.getById = function(req, res) {
  var user = users[req.params.id-1];
  return res.json({code: 'ok', user: user});
};

module.exports = usersController;