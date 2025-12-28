import path from 'node:path';
import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import zip from 'vite-plugin-zip-pack';
import manifest from './manifest.config.js';
import { name, version } from './package.json';

export default defineConfig({
	build: {
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			'@': `${path.resolve(__dirname, 'src')}`,
			'@assets': `${path.resolve(__dirname, 'src/assets')}`,
			'@scss': `${path.resolve(__dirname, 'src/scss')}`,
			'@components': `${path.resolve(__dirname, 'src/components')}`,
			'@constants': `${path.resolve(__dirname, 'src/constants')}`,
			'@effects': `${path.resolve(__dirname, 'src/effects')}`
		},
	},
	plugins: [
		react(),
		crx({ manifest }),
		zip({ outDir: 'release', outFileName: `${name}-${version}.zip` }),
	],
	server: {
		cors: {
			origin: [
				/chrome-extension:\/\//,
			],
		},
	},
})
