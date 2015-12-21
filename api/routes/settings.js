var router = require('express').Router();
var mdEx = function(req, res, next){
  console.log('Simon:: ' + req.url);
  next();
};
var retunSettings = function(req, res) {
    return res.json({code: 'ok', api: 'http://localhost:5000'});
};

router
  .get('/', mdEx, retunSettings);


module.exports = router;
