const config = require('../webpack.config');
var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');

var options = {
    // contentBase: "./dist",
    // publicPath: 'public',
	hot: true,
	host: 'localhost',
	port:8003,
	stats: {
		colors: true,
		modules: true,
		children: false
	}
};
WebpackDevServer.addDevServerEntrypoints(config, options);
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, options);


server.listen(options.port);

