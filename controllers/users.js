var lodash = require('lodash');
var Promise = require("bluebird");

// Dummy users
var users = [
  { id : 1, name: 'tobi', email: 'tobi@learnboost.com' },
  { id : 2, name: 'loki', email: 'loki@learnboost.com' },
  { id : 3, name: 'jane', email: 'jane@learnboost.com' }
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

usersController.parseRequestToUser = function(req){
   return {
    id: users.length+1,
    name: _.get(req, 'body.name', 'no name'),
    email: _.get(req, 'body.email', 'no@email.com')
  };
};

module.exports = usersController;
