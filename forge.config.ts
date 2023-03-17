import type { ForgeConfig } from '@electron-forge/shared-types';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
	packagerConfig: {
		icon: './images/icon',
	},
	rebuildConfig: {},
	makers: [
		// {
		// 	name: '@electron-forge/maker-dmg',
		// 	config: {},
		// },
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				authors: 'Kiln',
				description: 'Kiln Desktop',
				certificateFile: './code-signing-cert.p12',
				certificatePassword: process.env.CERTIFICATE_PASSWORD,
			},
		},
	],
	publishers: [
		{
			name: '@electron-forge/publisher-github',
			config: {
				authToken: '',
				draft: true,
				repository: {
					owner: 'kilnfi',
					name: 'kiln-desktop',
				},
				prerelease: false,
			},
		},
	],
	plugins: [
		new WebpackPlugin({
			mainConfig,
			renderer: {
				config: rendererConfig,
				entryPoints: [
					{
						html: './src/index.html',
						js: './src/renderer.ts',
						name: 'main_window',
						preload: {
							js: './src/preload.ts',
						},
					},
				],
			},
		}),
	],
};

export default config;
