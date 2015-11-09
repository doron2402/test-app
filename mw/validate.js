var Joi = require('joi');
module.exports = {
  userId: function(req, res, next) {
    var schema =  Joi.object().keys({
      id: Joi.number().min(0).required()
    });
    // {id : 1}
    Joi.validate(req.params, schema, function (err, value) {
      next(err);
    });

  }
};