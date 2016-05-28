var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Nodejs & Express' ,
    users:['lisi','wangwu','zhaoliu']
  });
});

/* GET login page */
router.get('/login',function(req,res){
  res.render('login');
});


router.post('/checkLogin',function(req,res){
  var username = req.body.username;
  var password = req.body.password;

  /*把用户名存入session*/
  req.session.name = username;

  //res.send("用户名: "+ username +" , 密码: "+ password);
  //console.log("用户名: "+ username +" , 密码: "+ password);

  res.render('welcome',{
    username: req.session.name
  });
});


router.get('/testSession',function(req,res){
  res.render('testSession',{
    /*从session获取*/
    name: req.session.name
  });
});






module.exports = router;
