var router = require('express').Router();
router
  .get('/', function(req, res){
    return res.json({code: 'ok', api: 'http://localhost:5000'});
  });
module.exports = router;
