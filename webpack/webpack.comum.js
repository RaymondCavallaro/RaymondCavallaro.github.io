const projects = require('../src/projects').projects;

module.exports = function(environment) {
	let config = require('../environment/' + environment);

	config.modules = [ {
		entryName: 'index',
		src : './src/index/index.js',
		htmlDestPath : config.outputPath,
	} ].concat(projects.map(proj => ({
		entryName: proj.name,
		src : './src/' + proj.name + '/index.js',
		htmlDestPath : config.outputPath + proj.name + '/',
	})));

	return config;
};