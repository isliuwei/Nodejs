var express = require('express');
var router = express.Router();

/*  引入控制器controller下的welcome模块  */
var welcome = require('../controller/welcome');

/*  引入控制器controller下的message模块  */
var message = require('../controller/message');

/* GET home page. use welcome.index*/
router.get('/', welcome.index);

/* GET login page. use welcome.login*/
router.get('/login',welcome.login);

router.get('/testQuery', welcome.query);

router.get('/testParams/:name/:age', welcome.params);

router.get('/blogIndex',welcome.loadBlogIndex);

router.get('/blogDetail',welcome.loadBlogDetail);

router.get('/addBlog',welcome.loadAddBlog);

router.post('/saveMessage',message.saveMessage);


router.get('/messList',message.listMessage);




module.exports = router;
