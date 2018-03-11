var path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		// needs absolute path in order to find the folder on our computer using webpack
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}
}