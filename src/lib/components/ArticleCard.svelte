<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const articlePlaceholder: string = 'placeholder w-full h-full animate-pulse';

	export let delay: number;
	export let title: string;
	export let pageLink: string;
	export let cardLink: string;

	let loaded = false;
	let imageLoaded = false;
	let visible = false;

	onMount(() => {
		setTimeout(() => {
			loaded = true;
			visible = true;
		}, delay);
	});

	function handleImageLoad() {
		imageLoaded = true;
	}
</script>

<div class="card card-hover variant-filled-surface p-4 h-48 w-[340px] relative overflow-hidden">
	{#if visible}
		<div
			class="absolute inset-0 flex items-center justify-center"
			transition:fly={{ x: 200, duration: 500 }}
		>
			{#if loaded}
				<a
					class="card w-full h-full flex items-center justify-center"
					href={pageLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					{#if !imageLoaded}
						<div class={articlePlaceholder}></div>
					{/if}
					<img
						alt={title}
						class="max-w-full max-h-full object-contain"
						src={cardLink}
						on:load={handleImageLoad}
						style="display: {imageLoaded ? 'block' : 'none'};"
					/>
				</a>
			{:else}
				<div class={articlePlaceholder}></div>
			{/if}
		</div>
	{:else}
		<div class={articlePlaceholder}></div>
	{/if}
</div>
