
/*
 * GET login page.
 */

exports.view = function(req, res){
    console.log("exports.view called inside diy.js");
    res.render('login');
  };