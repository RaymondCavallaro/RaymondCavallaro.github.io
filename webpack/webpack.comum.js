const projects = require('../src/data/projects').projects;

module.exports = function(environment) {
	let config = require('../environment/' + environment);

	config.modules = [ {
		entryName: 'index',
		src : './src/index/index.js',
		bundleDestPath : '',
		htmlDestPath : config.outputPath,
		htmlTitle: 'Raymond Ruiz Cavallaro',
	} ].concat(projects.map(proj => ({
		entryName: proj.name,
		src : './src/' + proj.name + '/index.js',
		bundleDestPath : proj.name + '/',
		htmlDestPath : config.outputPath + proj.name + '/',
		htmlTitle: proj.name,
	})));

	return config;
};