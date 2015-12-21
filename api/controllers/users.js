var lodash = require('lodash');
var Promise = require("bluebird");

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

var usersController = {};

usersController.showAll = function(req, res){
  return res.json({code: 'ok', users: users});
};

usersController.getById = function(req, res) {
  var user = users[req.params.id-1];
  return res.json({code: 'ok', user: user});
};

usersController.addUser = function(req, res){
  users.push(usersController.parseRequestToUser(req));
  return res.json({code: 'ok', users: users});
};

usersController.editUser = function(req, res){
  users[req.params.id] = req.body;
  return res.json({code: 'ok', users: users});
};

usersController.parseRequestToUser = function(req){
   return {
    name: req.body && req.body.name ?  req.body.name : 'no name',
    email: req.body && req.body.email ? req.body.email : 'no@email.com'
  };
};

module.exports = usersController;
