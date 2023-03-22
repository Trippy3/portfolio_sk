import adapter from '@sveltejs/adapter-cloudflare';
// import the preprocessor
import preprocess from 'svelte-preprocess'

const config = {
	// added these lines:
	preprocess: [
		preprocess({
		postcss: true,
		}),
	],

	kit: {
		adapter: adapter({
		  // See below for an explanation of these options
		  routes: {
			include: ['/*'],
			exclude: ['<all>']
		  }
		})
	},
}
  
export default config
