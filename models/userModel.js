
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');


/*定义一个 userSchema 类似mysql的表结构*/
var userSchema = mongoose.Schema({
    name: String,
    password: String,
    age: Number
});

var User = mongoose.model('User',userSchema,'users');




exports.getByNameAndPwd = function(name,pwd,callback){
console.log(name+','pwd);
	
	User.findOne({name:name,password:pwd},function(err,result){
		// callback(result);

	});
}