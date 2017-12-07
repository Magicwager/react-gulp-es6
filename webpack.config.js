const webpack = require("webpack");
module.exports={
	// devtool:'eval-source-map',//便于开发环境找错误位置，eval-source-map只用于开发环境
	entry:__dirname+"/src/index.jsx",//唯一的入口文件
	output:{
		path:__dirname+"/build",//产出文件所在的位置
		filename:"build.js"//产出文件的文件名
	},
	module:{
		rules:[
		 {
		 	test:/(\.js|\.jsx)$/,
		 	exclude:/node_modules/,
		 	use:'babel-loader'
		 },
		 {
		 	test:/\.css$/,
		 	use:['style-loader','css-loader']
		 },
		 {
		 	test:/\.json$/,
		 	use:'json-loader'//新版本webpack要求配置文件中不能省略‘-loader’
		 },
		 {
		 	test:/\.less$/,
		 	use:['style-loader','css-loader','less-loader','postcss-loader']
		 },
		 {
		 	test:/\.html$/,
		 	use:'html-loader'
		 }

		]

	}
}
/*__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。*/