const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const path = require('path');
const configFunction = require('./webpack.comum');

let conf = configFunction('dev');

module.exports = conf.modules.map(entries => ({
	entry : {
		'index' : entries.src
	},
	output : {
		filename : conf.outputPath + entries.bundleDestPath + entries.entryName + conf.bundleNameExtension + '.js',
		path : path.resolve(__dirname, conf.outputFolder),
	},
	module: {
		rules: [ {
			test: /\.css$/i,
			use: [
				'style-loader',
				'css-loader',
			],
	    }, {
			test: /\.hbs$/,
			use: [ 'handlebars-loader' ]
    	}, {
    		test: /\.(ico|png|svg|jpg|gif)$/,
    		use: [ 'file-loader' ],
    	}, {
    		test: /\.(woff|woff2|eot|ttf|otf)$/,
    		use: [ 'file-loader' ],
		}, ]
	},
	externals: {
		'jquery': 'jQuery',
	},
	plugins : [
		new HtmlWebpackTagsPlugin({
			append: false,
			tags: [
				'https://code.jquery.com/jquery-3.5.1.min.js',
				'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
			],
			publicPath: false
		}), new HtmlWebpackPlugin({
			inject : 'head',
			filename : entries.htmlDestPath + 'index.html',
			title: entries.title,
//		}), new CopyWebpackPlugin({
//			patterns: [
//				{ from: 'node_modules/material-kit/assets' }
//		    ]
		}), 
	]
}));
