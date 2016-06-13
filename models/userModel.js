
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');


/*定义一个 userSchema 类似mysql的表结构*/
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
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
		// console.log(result);
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



