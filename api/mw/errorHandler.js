module.exports = function(err, req, res, next){
    if (err){
        console.error(err);
        console.log(err.stack);
    }
    return res.render('error', {
      error: err
    }).status(500);
};