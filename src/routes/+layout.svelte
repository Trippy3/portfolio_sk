<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import "remixicon/fonts/remixicon.css";
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl"><a href="/">Aviary</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a href="https://github.com/Trippy3/portfolio_sk" class="btn variant-filled" target="_blank" rel="noopener noreferrer">
					<span><i class="ri-github-fill text-xl"></i></span>
					<span>GitHub</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<p class="flex justify-center items-center py-4">© 2023 hiro-torii.</p>
	</svelte:fragment>
</AppShell>
