const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = [ {
	entryName: 'index',
	src : './src/index.js',
	htmlDestPath : '',
}, {
	entryName: 'tryjs',
	src : './src/tryjs/index.js',
	htmlDestPath : 'tryjs/',
} ].map(entries => ({
	entry : {
		'index' : entries.src
	},
	output : {
		filename : 'build/' + entries.entryName + '.[contenthash].bundle.js',
		path : path.resolve(__dirname),
	},
	plugins : [ new HtmlWebpackPlugin({
		inject : 'head',
		filename : entries.htmlDestPath + 'index.html'
	}) ]
}));
