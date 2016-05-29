
/*  checkLogin方法    */
exports.checkLogin = function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    /*把用户名存入session*/
    req.session.name = username;

    //res.send("用户名: "+ username +" , 密码: "+ password);
    //console.log("用户名: "+ username +" , 密码: "+ password);

    res.render('welcome',{
        username: req.session.name
    });
};

/*  getSession方法    */
exports.getSession = function(req,res){
    res.render('testSession',{
        /*从session获取*/
        name: req.session.name
    });
};