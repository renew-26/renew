import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
	plugins: [react()],
	base: '/renew/',
	css: {
		devSourcemap: true,
	},
	resolve: {
		alias: [
			{ find: '@components', replacement: path.resolve(__dirname, 'src/components') },
			{ find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
		],
	},
});
