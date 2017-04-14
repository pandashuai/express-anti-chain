/*
	#The ignore parameter type is an array
		value: ['127.0.0.1', 'localhost:3000', '*.test.com', '127.0.0.1:*']
	#The exts parameter type is an array
		value: ['.png', '.jpg', '.jpeg', '.gif', '.swf', '.js', '.css']
	#The default parameter type is either a string or an object, but the default is a string
		value: '/static/default.pug'  ---> default
		or
		value: {
			images: '/static/default.jpg',
			js: '/static/default.js',
			css: '/static/default.css'
		}
	#The additional parameter exists to complement the images attribute of the defalut parameter
		additional: ['.png', '.jpg', '.jpeg', '.gif', '.swf', '.flv']
	#The strict parameter determines whether direct access is blocked
		value: true(default) or false
 */
module.exports = {
	ignore: ['localhost:*', '127.0.0.1:*'],
	exts: [],
	default: '',
	additional: ['.png', '.jpg', '.jpeg', '.gif', '.swf', '.flv'],
  	strict: true
}