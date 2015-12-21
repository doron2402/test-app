var lodash = require('lodash');
var Promise = require("bluebird");

// Dummy users
var users = [
  { name: {first: 'Doron', last: 'Segal'}, email: 'tobi@learnboost.com', age: 30 },
  { name: {first: 'Vin', last: 'Halbwachs'}, email: 'loki@learnboost.com', age: 28 },
  { name: {first: 'Tony', last: 'Odubela'}, email: 'jane@learnboost.com', age: 37 },
  { name: {first: 'Simon', last: 'Attley'}, email: 'jane@learnboost.com', age: 50 }
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
