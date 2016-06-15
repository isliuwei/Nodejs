

/*引入数据库配置文件*/
var mongoose = require('./db');

/*定义一个 messageSchema 类似mysql的表结构*/
var messageSchema = mongoose.Schema({
    messName: String,
    messEmail: String,
    messSubject: String,
    messContent: String,
    messTime: Date
});

var Message = mongoose.model('Message',messageSchema,'messages');


exports.saveByAll = function(name,email,subject,content,callback){

	/*实例化一个对象*/
	var message = new Message({
		messName: name,
    	messEmail: email,
    	messSubject: subject,
    	messContent: content,
    	messTime: new Date()
	});

	message.save(function(err,result){
		callback(result);
	});

};



exports.getAll = function(callback){
	Message.find(function(err,result){
		// console.log(result);
		callback(result);
		
	});
};




