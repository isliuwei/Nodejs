var userModel = require('../models/userModel');


/**处理post请求*/
/*  checkLogin方法    */
exports.checkLogin = function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    /*把用户名存入session*/
    req.session.name = username;

    // res.send("用户名: "+ username +" , 密码: "+ password);
    // console.log("用户名: "+ username +" , 密码: "+ password+", "+req.session.name);

    userModel.getByNameAndPwd(username,password,function(rs){
        if(rs){
            //res.send('登录成功！欢迎'+req.session.name);
            res.render('blogIndex',{username:req.session.name});
        }else{
            res.send('登录失败！');
        }
    });


    // res.render('welcome',{
    //     username: req.session.name
    // });
};

/*  getSession方法    */
exports.getSession = function(req,res){
    res.render('testSession',{
        /*从session获取*/
        name: req.session.name
    });
};


/*跳转至注册页面*/
exports.loadRegPage = function(req,res){
    res.render('register');
};


/*跳转至登录页面*/
exports.loadLogPage = function(req,res){
    res.render('login');
};


/*跳转至登出页面*/
exports.logout = function(req,res){
    req.session.destroy();
    res.render('login');
};



exports.list = function(req,res){
     userModel.getAll(function(rs){
        if(rs){
            res.render('usersList',{
                users:rs
            });
        }
     });
};



exports.saveInfo = function(req,res){

    //接收注册信息
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    // console.log(username+" ,"+ password+", "+email);

    //调用userModel下的方法保存用户注册信息
    userModel.saveByAll(username,password,email,function(rs){
        if(rs){
            //res.send('保存成功');
            res.render('success',{username:username});
        }else{
            res.send('保存失败');
        }
    });
};



exports.checkName =  function(req,res){
    var username = req.query.username;
    // console.log(username);

    userModel.getByName(username,function(rs){
        if(rs){
            //res.render('register',{data:rs});
            res.send('success');
        }else{
            res.send('fail');
        }

    });
};


exports.delete = function(req,res){
    var userId = req.query.user_id;

    userModel.deleteById(userId,function(rs){
        if(rs){
            res.send('删除成功！');

        }else{
            res.send('删除失败！');
        }
    });
    
};


