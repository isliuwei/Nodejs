
/*引入数据库配置文件*/
var mongoose = require('./db');

/*定义一个 userSchema 类似mysql的表结构*/
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    blogs: Array
});

var User = mongoose.model('User',userSchema,'users');

exports.getByNameAndPwd = function(name,pwd,callback){
	
	User.findOne({username:name,password:pwd},function(err,result){
		callback(result);
	});
};


exports.saveByAll = function(name,pwd,email,callback){

	/*实例化一个对象*/
	var user = new User({
		username: name,
		password: pwd,
		email: email
	});

	user.save(function(err,result){
		callback(result);
	});
	




};


exports.getAll = function(callback){
	User.find(function(err,result){
		//console.log(result);
		callback(result);
		
	});
};


exports.getByName = function(name,callback){
	

	User.findOne({username: name},function(err,result){
		//console.log(result);
		callback(result);
	});

}


exports.deleteById = function(id,callback){
	var user = new User({
		_id: id
	});

	user.remove(function(err,result){
		callback(result);
	});

};



exports.saveBlogByUser = function(blogJSON,username,callback){



	/*实例化一个对象*/
	// var user = new User({
	// 	username: username,
	// 	blogs: blogJSON
	// });

	// console.log(user);
	User.update({username: username},{$set:{blogs: blogJSON}},{upser: true},function(err, numberAffected, raw){
		 //if (err) return handleError(err);
		//console.log(numberAffected);
		callback(numberAffected);
	});

	// user.save(function(err,result){
	// 	callback(result);
	// });


};















