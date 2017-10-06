'use strict';

var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');
var bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    output : {
        publicPath: '/assets/',
        path      : __dirname + '/builds/web/assets/',
        filename  : 'main.js'
    },
    cache  : true,
    devtool: 'source-map',
    entry  : [
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    stats  : {
        colors : true,
        reasons: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new extractTextPlugin({
            filename: '[name].css'
        }),
        new bundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: 'localhost',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    ],
    module : {
        rules: [{
            test   : /\.js$/,
            exclude: /node_modules/,
            loader : 'react-hot-loader!babel-loader'
        }, {
            test: /\.scss$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            test   : /\.css$/,
            loader : 'style-loader!css-loader'
        }, {
            test  : /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
