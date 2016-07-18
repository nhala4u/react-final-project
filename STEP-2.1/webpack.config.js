var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    devtool: 'eval-source-map',
    entry: {
        css: "./app/css/app.css",
        javascript: "./app/js/app.js",
        html: "./app/index.html"
    },
    output: {
        path: __dirname + "/public",
        filename: "./js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?'+JSON.stringify(
                {
                    presets: ['react', 'es2015'],
                    'plugins': [
                        'syntax-class-properties',
                        'syntax-decorators',
                        'syntax-object-rest-spread',
                        'transform-class-properties',
                        'transform-object-rest-spread'
                    ]
                }
                )]
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    resolve: {
        modulesDirectories: ['node_modules', './src'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.BannerPlugin('Copyright by Vu Ho™.'),
        new ExtractTextPlugin("./css/app.css", {
            allChunks: true
        })
        
    ],
    devServer: {
        contentBase: './app',
        port: 7979,
        host: '127.0.0.1',
        historyApiFallback: true,
        inline: true,
        hot: true,
        noInfo: false,
        stats: { colors: true },
        watchOptions: {
            aggregateTimeout: 50,
        }
    }
};

module.exports = config;