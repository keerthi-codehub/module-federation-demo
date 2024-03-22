const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		publicPath: 'http://localhost:8080/',
	},
	devServer: {
		port: 8080,
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
			name: 'shared_components',
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/App.js',
				'./Badge': './src/components/badge/index.jsx',
				'./Button': './src/components/button/index.jsx',
				'./Sidebar': './src/components/sidebar/index.jsx',
				'./CustomButton': './src/components/button/index.jsx',
				'./CustomTable': './src/components/table/index.jsx'
			},
			shared: ['react', 'react-dom', 'react-router-dom', 'react-bootstrap', 'bootstrap'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
