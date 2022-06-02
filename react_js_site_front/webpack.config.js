const path = require("path");

module.exports = {
	entry: "./src/app.js",

	output:{
		filename: "bundle.js",
		path: path.join(__dirname, 'public')
	},

	module:{
		rules:[{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: ['style-loader', 'css-loader']
		}]
	},

	devServer:{
		static: './public',
		historyApiFallback: true,
	}

}