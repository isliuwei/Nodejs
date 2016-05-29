
/*  index方法   */
exports.index = function(req, res, next) {
    res.render('index', {
        title: 'Nodejs & Express' ,
        users:['lisi','wangwu','zhaoliu']
    });
};

/*  login方法  */
exports.login = function(req,res){
    res.render('login');
};