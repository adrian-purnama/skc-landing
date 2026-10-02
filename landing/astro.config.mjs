// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// site origin matches the address in src/data/site.ts
	site: 'https://kreasicemerlang.co.id',
	integrations: [sitemap()],
	vite: {
		build: {
			chunkSizeWarningLimit: 650,
		},
	},
});
