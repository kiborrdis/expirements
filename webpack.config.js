var path = require('path');

module.exports = {
    entry: {
    	html: './index.html',
    	js: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js"
    },
    module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				loader: 'babel',
				query: {
			      presets: ['es2015','react']
			    }
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.html$/, loader: 'file-loader?name=[name].[ext]'},
 
		]
	},
	devServer:{
        contentBase: 'dist'
    },
    resolve: {
    	root: [
    		path.resolve('./src')
    	]
    },
	resolveLoader: {
		modulesDirectories: [
		  './node_modules'
		]
	}
}