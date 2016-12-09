"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	entry: ["./src/app/index.jsx", "./src/app/index.scss"],
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loader: "babel-loader?presets[]=latest,presets[]=react"},
			{test: /\.jade$/, loader: "jade-loader"},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader!sass-loader")}
		]
	},
	plugins: [
		new ExtractTextPlugin("index.css"),
		new HtmlWebpackPlugin({filename: "index.html", template: "./src/app/index.jade"})
	]
};
