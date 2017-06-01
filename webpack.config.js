require("dotenv").config();

const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Config = require("./server/lib/config");

const jsxFilenameRegex = /\.jsx?$/;

module.exports = {
	entry: "./client/scripts/index.jsx",

	output: {
		path: Config.paths.dist,
		publicPath: "/static/",
		filename: "js/bundle.js"
	},

	module: {
		rules: [
			{
				test: jsxFilenameRegex,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			},

			{
				test: /\.(less)|(css)$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
								importLoaders: 2
							}
						},
						"postcss-loader",
						{
							loader: "less-loader",
							options: {
								sourceMap: true,
								modifyVars: {
									"fa-font-path": '"/static/fonts/font-awesome/"'
								}
							}
						},
					],
					publicPath: "/static/css"
				})
			},

			{
				test: /\.woff(2)?(\?.*)?$/,
				use: "url-loader?limit=10000&mimetype=application/font-woff"
			},

			{
				test: /\.ttf(\?.*)?$/,
				use: "file-loader"
			},

			{
				test: /\.eot(\?.*)?$/,
				use: "file-loader"
			},

			{
				test: /\.svg(\?.*)?$/,
				use: "file-loader"
			}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
			React: "react"
		}),

		// jQuery required by Bootstrap
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),

		new webpack.DefinePlugin({
			"process.env": {
				// Necessary environment variables for shared-lib/config
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				WEB_SOCKETS_RUN_INLINE: JSON.stringify(process.env.WEB_SOCKETS_RUN_INLINE),
				WEB_SOCKETS_PORT: JSON.stringify(process.env.WEB_SOCKETS_PORT),
				WEB_SOCKETS_URL: JSON.stringify(process.env.WEB_SOCKETS_URL),
			},
			IS_DEVELOPMENT: JSON.stringify(Config.app.isDevelopment),
		}),

		new ExtractTextPlugin({
			filename: "css/bundle.css",
			allChunks: true
		})
	],

	resolve: {
		extensions: [".js", ".jsx", ".json", ".less", ".css"],
		modules: [
			"node_modules",
			Config.paths.client,
			path.join(Config.paths.client, "styles")
		],
		alias: {
			"project/shared-lib": path.join(__dirname, "shared-lib"),
			"project/scripts": path.join(Config.paths.client, "scripts"),
			"project/styles": path.join(Config.paths.client, "styles")
		}
	},

	node: {
		Buffer: true,
		fs: "empty",
		assert: true,
		events: true,
		process: true
	},

	devtool: "source-map",
	// "devtool": "cheap-eval-source-map"
	// "devtool": "eval"

	devServer: {
		hot: true,
		noInfo: true,
		port: 7200,
		https: {
			key: fs.readFileSync(Config.app.ssl.key),
			cert: fs.readFileSync(Config.app.ssl.cert)
		},
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
};
