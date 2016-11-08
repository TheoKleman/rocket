// Require config
var config = require('./general.config.js');

let path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: config.scripts.inputPath + '/' + config.scripts.entry,
	},
	output: {
		filename: config.scripts.outputName + '.js',
	},
	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.es6'],
		root: [
			path.resolve(config.scripts.inputPath),
			path.resolve('../node_modules/')
		],
	}
}
