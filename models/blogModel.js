/*引入数据库配置文件*/
var mongoose = require('./db');

/*定义一个 messageSchema 类似mysql的表结构*/
var blogSchema = mongoose.Schema({
    blogTitle: String,
    blogCate: String,
    blogType: String,
    blogContent: String,
    blogAuthor: String,
    blogAddTime: String

});

var Blog = mongoose.model('Blog',blogSchema,'blogs');




exports.saveBlogByAll = function(blogTitle,blogCate,blogType,blogContent,blogAuthor,blogAddTime,callback){

	/*实例化一个对象*/
	var blog = new Blog({
		blogTitle: blogTitle,
    	blogCate: blogCate,
    	blogType: blogType,
    	blogContent: blogContent,
    	blogAuthor: blogAuthor,
    	blogAddTime: blogAddTime
	});

	//console.log(blog);

	blog.save(function(err,result){
		callback(result);
	});
}




exports.getAllBlogs = function(callback){
	Blog.find(function(err,result){
		callback(result);
		//console.log(result);
	});
};
