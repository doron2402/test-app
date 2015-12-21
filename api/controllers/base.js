var baseController = {};

baseController.home = function(req, res){
  return res.render('home', {
    title: "Home",
    header: "Home"
  });
};

module.exports = baseController;