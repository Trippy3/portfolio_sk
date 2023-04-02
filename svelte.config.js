import adapter from '@sveltejs/adapter-static';
// import the preprocessor
import preprocess from 'svelte-preprocess'

const config = {
	// added these lines:
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
}
  
export default config
