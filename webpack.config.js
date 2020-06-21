const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const confs = require('./config-webpack');

module.exports = confs.flatMap(conf => conf.modules.map(entries => ({
	entry : {
		'index' : entries.src
	},
	output : {
		filename : conf.outputPath + entries.entryName + conf.bundleNameExtension + '.js',
		path : path.resolve(__dirname, conf.outputFolder),
	},
	module: {
		rules: [ {
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
	    } ]
	},
	plugins : [ new HtmlWebpackPlugin({
		inject : 'head',
		filename : entries.htmlDestPath + 'index.html'
	}) ]
})));
