#init package.json
npm init -y

#babel
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react

#webpack
npm install --save-dev webpack webpack-cli webpack-dev-server 

#webpack.config.js
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
		}]
	},

	devServer:{
		static: './public'
	}

}

#react
npm install react react-dom

#generate bundle
./node_modules/.bin/webpack --mode=development

#babel in webpack
npm install --save-dev babel-loader

#babel.config.json
{
	presets: [
		"@babel/preset-env",
		"@babel/preset-react",
	]
}


#scripts in package.json
"build": "webpack",
"start": "webpack --serve",
"watch": "webpack --watch"