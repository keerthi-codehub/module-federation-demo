const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		if (!options.isServer) {
			config.plugins.push(
				new NextFederationPlugin({
					name: 'container_app', //Can not use "-"
					filename: 'static/chunks/remoteEntry.js',
					remotes: {
						remoteReact: 'remote_react@http://localhost:4001/remoteEntry.js',
						sharedComponents:
							'shared_components@http://localhost:8080/remoteEntry.js',
						// sharedComponents:
						// 	'shared_components@http://localhost:8080/remoteEntry.js',
						// adminConsole: 'admin_console@http://localhost:3004/remoteEntry.js',
						// peoples: 'peoples@http://localhost:3005/remoteEntry.js',
						// workOrder: 'work_order@http://localhost:3006/remoteEntry.js',
						// login:
						// 	'account@http://localhost:3007/_next/static/chunks/remoteEntry.js',
					},
					shared: {},
					extraOptions: {
						debug: true,
					},
				})
			);
		}

		return config;
	},
};

module.exports = nextConfig;
