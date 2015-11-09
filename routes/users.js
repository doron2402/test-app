var router = require('express').Router();
var mw = require('../mw');
var controllers = require('../controllers');

router
  .get('/', mw.logger.printRequest, controllers.users.showAll)
  .get('/:id', mw.logger.printRequest, mw.validate.userId, controllers.users.getById);
module.exports = router;
