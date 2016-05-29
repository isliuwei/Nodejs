var express = require('express');
var router = express.Router();

/*  引入控制器controller下的welcome模块  */
var welcome = require('../controller/welcome');

/* GET home page. use welcome.index*/
router.get('/', welcome.index);

/* GET login page. use welcome.login*/
router.get('/login',welcome.login);


module.exports = router;
