
const webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry:'./client/app/app.js',

    output: {
        path:'public/',
        filename: 'bundle.js'
    },
    stats: {
        // Configure the console output
        colors: true,
        modules: true,
        reasons: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: true,
            template: "./client/index.html"
        }),
        new CopyWebpackPlugin([
            {context: "./client/assets/", from: "img/*"}
        ])
    ],
    module:{
        loaders:[
            {test:/\.js$/,  loader:'babel?presets[]=es2015'},
            {test:/\.html$/, loader:'raw'},
            {test:/\.css$/, loader:'style!css'},
            {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
            {test:/\.json$/, loader:'json'},
            {test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, loader: "file?name=lib/[hash].[ext]" }
        ]
    }
};