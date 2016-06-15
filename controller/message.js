
var messModel = require('../models/messModel');
//var userModel = require('../models/userModel');

exports.saveMessage = function(req,res){

	var name = req.body.mesName;
	var email = req.body.mesEmail;
	var subject = req.body.mesSubject;
	var content = req.body.mesContent;

	//console.log(name+" ,"+email+" ,"+subject+" ,"+content);

	messModel.saveByAll(name,email,subject,content,function(rs){

		if(rs){
			res.send("成功");
		}else{
			res.send("失败");
		}
	});

	
	
};


exports.listMessage = function(req,res){
	messModel.getAll(function(rs){
		if(rs){
			res.render('messagesList',{messages:rs});
		}
		
	});

}