var router = require('express').Router();
var mw = require('../mw');
var controllers = require('../controllers');

router
  .get('/', mw.logger.printRequest, controllers.base.home);
module.exports = router;
