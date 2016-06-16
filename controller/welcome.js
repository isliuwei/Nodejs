
/*  index方法   */
exports.index = function(req, res) {
    res.render('index', {
        title: 'Nodejs & Express' ,
        users:['Yeoman','Bower','Grunt']
    });
};

/*  login方法  */
exports.login = function(req,res){
    res.render('login');
};
/**
	// GET /search?q=tobi+ferret
	req.query.q
	// => "tobi ferret"

	// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
	req.query.order
	// => "desc"

	req.query.shoe.color
	// => "blue"

	req.query.shoe.type
	// => "converse"
*/

exports.query = function(req,res){
    var name = req.query.name;
    var age = req.query.age;
    res.send("成功"+name+" ,"+age);
};

/**
	app.get('/user/:id', function(req, res){
  		res.send('user ' + req.params.id);
	});
*/


exports.params = function(req,res){
    var name = req.params.name;
    var age = req.params.age;
    res.send("成功"+name+" ,"+age);
};

// exports.loadBlogHeader = function(req,res){

// };



// exports.loadBlogIndex = function(req,res){
//     /*首次跳转页面*/
//     var username = req.session.username;
//     // res.locals.name = req.session.name;
//     res.render('blogIndex', {username: username});
//     // res.render('blogIndex');
// };



exports.loadBlogDetail = function(req,res){
    /*首次跳转页面*/
    var username = req.session.username;
    res.render('blogDetail', {username: username});
};


exports.loadAddBlog = function(req,res){
    var username = req.session.username;
    res.render('addBlog', {username: username});
};













