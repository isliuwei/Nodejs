var express = require('express');
var router = express.Router();

var users = require('../controller/users.js');

/* POST checkLogin. use users.checkLogin*/
router.post('/checkLogin',users.checkLogin);


/*  GET testSession page  use session */
router.get('/testSession',users.getSession);




router.get('/list',users.list);


/*用户注册页面*/
router.get('/register',users.loadRegPage);


/*用户登录页面*/
router.get('/login',users.loadLogPage);


/*用户登出页面*/
router.get('/logout',users.logout);


/*保存用户注册信息*/
router.post('/saveRegInfo',users.saveInfo);


router.get('/checkUsername',users.checkName);


router.get('/delete',users.delete);


router.post('/saveBlog',users.saveUserBlog);


router.get('/userSetting',users.loadUsrSetPage);

router.get('/profile',users.loadProfilePage);

router.post('/updateUserInfo',users.updateInfo);













module.exports = router;
