"use strict";

var webpack = require('webpack');

module.exports = {

  context: __dirname+'\\client',
  entry:{
    main:['./app/app.js']
  },

  output:{
    filename:'./client/bundle.js'
  },

  module:{
    loaders:[
      {test:/\.js$/,  loader:'babel?presets[]=es2015'},
      {test:/\.html$/, loader:'raw'},
      {test:/\.css$/, loader:'style!css'},
      {test:/\.sass$/, loader:'style!css!sass?indentedSyntax'},
      {test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      {test: /\.(ttf|eot|svg)$/, loader: "file-loader" }
    ]
  },

  devtool: "#inline-source-map",

  devServer:{
    host:'localhost',
    port: 8080,
  }

}
