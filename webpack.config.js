var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'public');

var webpackConfig = {
    devtool:'source-map',
    context: srcPath,
    entry: path.join(srcPath, 'js', 'client.js'),
    output: {
            path: buildPath,
            filename: 'bundle.js'
    },
    module: {
            loaders: [
                    {
                        test: /\.js?$/,
                        exclude: /(server|node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            presets: ['react', 'latest']
                        }
                    },
            ]
    },
    resolve: {
        extensions: ['', '.js']
    },

    plugins: []
};

if (process.env.NODE_ENV == 'production') {
    webpackConfig.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
}

// Inject the environment constant here
module.exports = webpackConfig;