import type { ForgeConfig } from '@electron-forge/shared-types';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
	packagerConfig: {
		icon: './images/icon',
		osxSign: {}, // object must exist even if empty
		osxNotarize: {
			tool: 'notarytool',
			appleId: process.env.APPLE_ID!,
			appleIdPassword: process.env.APPLE_PASSWORD!,
			teamId: process.env.APPLE_TEAM_ID!,
		},
	},
	rebuildConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-dmg',
			config: {
				icon: './images/icon.png',
				name: 'Kiln Desktop',
				overwrite: true,
			},
		},
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				authors: 'Kiln',
				description: 'Kiln Desktop',
				certificateFile: './sectigo_cert.p12',
				certificatePassword: process.env.SECTIGO_CERT_PASSWORD,
			},
		},
	],
	publishers: [
		{
			name: '@electron-forge/publisher-github',
			config: {
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
