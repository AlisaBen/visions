var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_moudles)/,
            loader: 'babel-loader'
        }]
    }
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    //     // new UglifyJsPlugin(),
    // ] // 压缩js

}