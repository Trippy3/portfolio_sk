<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    export let delay = 300; // コンポーネントのロード遅延をプロパティとして受け取る

    let loaded = false;

    onMount(() => {
        setTimeout(() => {
            loaded = true;
        }, delay);
    });
</script>

<div class="card variant-filled-surface p-4 sm:grid gap-2 grid-cols-2 justify-items-center min-h-[32rem]">
    {#if loaded}
        <div in:fly={{ y: 50, duration: 300 }} class="base-1/2 m-2 card-hover w-80 h-[10rem] overflow-hidden">
            <a class="card w-full h-full flex items-center justify-center" href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer">
                <img
                    alt="github-top-commit"
                    class="max-w-full max-h-full object-contain"
                    src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/2-most-commit-language.svg"
                />
            </a>
        </div>
        <div in:fly={{ y: 50, duration: 300, delay: 100 }} class="base-1/2 m-2 card-hover w-80 h-[10rem] overflow-hidden">
            <a
                href="https://github.com/Trippy3"
                target="_blank"
                rel="noopener noreferrer"
                class="card w-full h-full flex items-center justify-center"
            >
                <img
                    alt="github-stats"
                    class="max-w-full max-h-full object-contain"
                    src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/3-stats.svg"
                />
            </a>
        </div>
        <div in:fly={{ y: 50, duration: 300, delay: 200 }} class="col-span-2 m-2 w-full h-[10rem] overflow-hidden flex items-center justify-center">
            <img
                alt="github-grass"
                class="max-w-full max-h-full object-contain"
                src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/0-profile-details.svg"
            />
        </div>
    {:else}
        <div class="base-1/2 m-2 w-80 h-[10rem] animate-pulse bg-surface-300-600-token"></div>
        <div class="base-1/2 m-2 w-80 h-[10rem] animate-pulse bg-surface-300-600-token"></div>
        <div class="col-span-2 m-2 w-full h-[10rem] animate-pulse bg-surface-300-600-token"></div>
    {/if}
</div>
