const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		publicPath: 'http://localhost:3006/',
	},
	devServer: {
		port: 3006,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: require.resolve('babel-loader'),
				exclude: /node_modules/,
				options: {
					presets: [require.resolve('@babel/preset-react')],
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['css-loader'],
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'work_order',
			filename: 'remoteEntry.js',
			remotes: {
				sharedComponents:'shared_components@http://localhost:8080/remoteEntry.js',
			},
			exposes: {
				'./App': './src/App.js',
			},
			shared: ['react', 'react-dom'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
