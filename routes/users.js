var express = require('express');
var router = express.Router();

var users = require('../controller/users.js');

/* POST checkLogin. use users.checkLogin*/
router.post('/checkLogin',users.checkLogin);


/*  GET testSession page  use session */
router.get('/testSession',users.getSession);

module.exports = router;
