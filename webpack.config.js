var path = require('path');

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		// needs absolute path in order to find the folder on our computer using webpack
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				// only apply babel to specific javascript files, for faster conversion
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}