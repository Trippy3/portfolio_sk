<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import 'remixicon/fonts/remixicon.css';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl"
					><a class="hover:text-gray-400 dark:hover:text-gray-600" href="/">Aviary</a></strong
				>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					href="https://github.com/Trippy3/portfolio_sk"
					class="btn variant-filled"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span><i class="ri-github-fill text-xl"></i></span>
					<span>GitHub</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="pageFooter">
		<p class="flex justify-center items-center py-4">© 2024 hiro-torii.</p>
	</svelte:fragment>
</AppShell>
