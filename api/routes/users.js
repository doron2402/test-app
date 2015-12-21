var router = require('express').Router();
var mw = require('../mw');
var controllers = require('../controllers');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router
  .get('/', mw.logger.printRequest, controllers.users.showAll)
  .post('/', mw.logger.printRequest, urlencodedParser, controllers.users.addUser)
  .post('/:id/update', mw.logger.printRequest, urlencodedParser, controllers.users.editUser)
  .get('/:id', mw.logger.printRequest, mw.validate.userId, controllers.users.getById);
module.exports = router;
