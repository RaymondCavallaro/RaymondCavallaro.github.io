const projects = require('./src/projects').projects;

let defaultConfig = {
	outputFolder : 'build/',
	outputPath : '',
//	bundleNameExtension : '.[contenthash].bundle',
	bundleNameExtension : '.bundle',
};

let publicConfig = Object.assign({}, defaultConfig, {
	outputFolder : 'RaymondCavallaro.github.io/',
});
let privateConfig = Object.assign({}, defaultConfig);

publicConfig.modules = [ {
	entryName: 'index',
	src : './src/index/index.js',
	htmlDestPath : publicConfig.outputPath,
} ].concat(projects.filter(proj => !proj.private).map(proj => ({
	entryName: proj.name,
	src : './src/' + proj.name + '/index.js',
	htmlDestPath : publicConfig.outputPath + proj.name + '/',
})));

privateConfig.modules = projects.filter(proj => proj.private).map(proj => ({
	entryName: proj.name,
	src : './src/' + proj.name + '/index.js',
	htmlDestPath : publicConfig.outputPath + proj.name + '/',
}));

let confs = [ publicConfig, privateConfig ];

module.exports = confs;