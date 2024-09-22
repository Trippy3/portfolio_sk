<script lang="ts">
	import { fly } from 'svelte/transition';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	export let delay: number;
	export let title: string;
	export let pageLink: string;
	export let cardLink: string;
</script>

<IntersectionObserver once let:intersecting top={-100}>
	{#if intersecting}
		<div
			class="card variant-filled-surface p-4 m-4 sm:mx-2"
			transition:fly={{ delay: delay, x: 200 }}
		>
			<a href={pageLink} target="_blank" rel="noopener noreferrer">
				<img alt={title} class="w-80" src={cardLink} />
			</a>
		</div>
	{:else}
		<div class="h-48"></div>
	{/if}
</IntersectionObserver>
