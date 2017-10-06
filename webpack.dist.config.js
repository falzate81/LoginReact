'use strict';

var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output : {
        publicPath: '/assets/',
        path      : __dirname + '/builds/web/assets/',
        filename  : 'main.js'
    },
    devtool: false,
    entry  : './src/index.js',
    stats  : {
        colors : true,
        reasons: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new extractTextPlugin({
            filename: '[name].css'
        })
    ],
    module : {
        rules: [{
            test   : /\.js$/,
            exclude: /node_modules/,
            loader : 'babel-loader'
        }, {
            test  : /\.scss$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test   : /\.css$/,
            loader : 'style-loader!css-loader'
        }, {
            test  : /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=1&name=./images/[hash].[ext]'
        }]
    }
};
