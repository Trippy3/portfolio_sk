<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let delay = 300;

	let loaded = false;

	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, delay);
	});
</script>

<div class="card variant-filled-surface p-4 flex flex-col items-center gap-4 min-h-[32rem]">
	{#if loaded}
		<div class="flex flex-wrap justify-center gap-4 w-full">
			<div
				in:fly={{ y: 50, duration: 300 }}
				class="card-hover overflow-hidden max-w-[340px] w-full"
			>
				<a
					class="card w-full h-full flex items-center justify-center"
					href="https://github.com/Trippy3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						alt="github-top-commit"
						class="w-full h-auto"
						src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/2-most-commit-language.svg"
					/>
				</a>
			</div>
			<div
				in:fly={{ y: 50, duration: 300, delay: 100 }}
				class="card-hover overflow-hidden max-w-[340px] w-full"
			>
				<a
					href="https://github.com/Trippy3"
					target="_blank"
					rel="noopener noreferrer"
					class="card w-full h-full flex items-center justify-center"
				>
					<img
						alt="github-stats"
						class="w-full h-auto"
						src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/3-stats.svg"
					/>
				</a>
			</div>
		</div>
		<div
			in:fly={{ y: 50, duration: 300, delay: 200 }}
			class="w-full max-w-[700px] overflow-hidden flex items-center justify-center"
		>
			<img
				alt="github-grass"
				class="w-full h-auto"
				src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/0-profile-details.svg"
			/>
		</div>
	{:else}
		<div class="flex flex-wrap justify-center gap-4 w-full">
			<div class="h-[200px] w-full max-w-[340px] animate-pulse bg-surface-300-600-token"></div>
			<div class="h-[200px] w-full max-w-[340px] animate-pulse bg-surface-300-600-token"></div>
		</div>
		<div class="w-full max-w-[700px] h-[200px] animate-pulse bg-surface-300-600-token"></div>
	{/if}
</div>
