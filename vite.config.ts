import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	define: {
		'import.meta.vitest': false
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}', 'src/routes/**/*.{js,ts}']
	}
});
