var blogModel = require("../models/blogModel");


exports.saveBlog = function(req,res){
	var blogTitle = req.body.blogTitle;
	var blogCate = req.body.blogCate;
	var blogType = req.body.blogType;
	var blogContent = req.body.blogContent;
	var blogAuthor = req.body.blogAuthor;
	var blogAddTime = req.body.blogAddTime;

	blogModel.saveBlogByAll(blogTitle,blogCate,blogType,blogContent,blogAuthor,blogAddTime,function(rs){
		if(rs){
			res.send("成功！");
		}else{
			res.send("失败！");
		}
	});


	//console.log(blogTitle +" ,"+blogCate+" ,"+blogType+" ,"+blogContent+" ,"+blogAuthor+" ,"+blogAddTime);



};



exports.loadBlogIndex = function(req,res){
	var username = req.session.username;
	blogModel.getAllBlogs(function(rs){
		if(rs){
			// console.log(username);
			// console.log(rs);
			res.render('blogIndex',{
				username: username,
				blogs:rs
			});
			// res.render('blogIndex',{
				
			// 	blogs:rs
			// });
		}
	});

};
