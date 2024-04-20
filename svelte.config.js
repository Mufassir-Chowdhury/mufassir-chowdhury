import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterCloudflare({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	},
	preprocess: vitePreprocess()
};

export default config;
