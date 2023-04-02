<script lang="ts">
	import { fly } from 'svelte/transition';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
    export let delay: number;
    export let title: string;
    export let pageLink: string;
    export let cardLink: string;
</script>

<IntersectionObserver once let:intersecting top={-100}>
    {#if intersecting}
            <div class="card variant-filled-surface p-4 m-4 sm:mx-2" transition:fly="{{delay: delay, x: 200}}">
                <a href={pageLink} target="_blank" rel="noopener noreferrer">
                    <img alt={title} class="w-80"  src={cardLink}/>
                </a>
            </div>
    {:else}
        <div class="h-48"></div>
    {/if}
</IntersectionObserver>
        <!-- <IntersectionObserver once let:intersecting top={-100}>
            {#if intersecting}
                <div class="card variant-filled-surface p-4 m-4 sm:mx-2" transition:fly="{{delay: 250, x: 200}}">
                    <a href="https://zenn.dev/hiro_torii/articles/06d7e845e146ee" target="_blank" rel="noopener noreferrer">
                        <img alt="zenn1" class="w-80"  src="https://res.cloudinary.com/zenn/image/upload/s---HahMiZJ--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E8%25B6%2585%25E9%25AB%2598%25E9%2580%259FDataFrame%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2596%25E3%2583%25A9%25E3%2583%25AA%25E3%2583%25BC%25E3%2580%258CPolars%25E3%2580%258D%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:hiro-torii%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzY3ZDA0YmVmOTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"/>
                    </a>
                </div>
            {:else}
                <div class="h-48"></div>
            {/if}
        </IntersectionObserver>
        <IntersectionObserver once let:intersecting top={-100}>
            {#if intersecting}
                <div class="card variant-filled-surface p-4 m-4 sm:mx-2" transition:fly="{{delay: 350, x: 200}}">
                    <a href="https://zenn.dev/hiro_torii/articles/55ba88f40e2e00" target="_blank" rel="noopener noreferrer">
                        <img alt="zenn2" class="w-80"  src="https://res.cloudinary.com/zenn/image/upload/s--AiSpyjRh--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%259E%25E3%2583%258D%25E3%2582%25B8%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2588%25E7%25B3%25BB%25E3%2581%25AE%25E3%2582%25AD%25E3%2583%25A3%25E3%2583%25AA%25E3%2582%25A2%25E3%2583%2591%25E3%2582%25B9%25E3%2582%2592%25E5%25BF%2597%25E6%259C%259B%25E3%2581%2599%25E3%2582%258B%25E4%25BA%25BA%25E5%2590%2591%25E3%2581%2591%25E3%2580%2581%2520%25E6%2597%25A5%25E3%2580%2585%25E3%2581%25AE%25E6%25A5%25AD%25E5%258B%2599%25E3%2581%25A7%25E4%25BC%25B8%25E3%2581%25B0%25E3%2581%2597%25E3%2581%25A6%25E3%2581%2584%25E3%2581%258D%25E3%2581%259F%25E3%2581%2584%25E5%259F%25BA%25E7%25A4%258E%25E8%2583%25BD%25E5%258A%259B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:hiro-torii%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzY3ZDA0YmVmOTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"/>
                    </a>
                </div>
            {:else}
                <div class="h-48"></div>
            {/if}
        </IntersectionObserver>
        <IntersectionObserver once let:intersecting top={-100}>
            {#if intersecting}
                <div class="card variant-filled-surface p-4 m-4 sm:mx-2" transition:fly="{{delay: 450, x: 200}}">
                    <a href="https://zenn.dev/hiro_torii/articles/93138ea37c785f" target="_blank" rel="noopener noreferrer">
                        <img alt="zenn3" class="w-80"  src="https://res.cloudinary.com/zenn/image/upload/s--Kgxa3y9F--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:10%25E4%25BA%25BA%25E8%25A6%258F%25E6%25A8%25A1%25E3%2581%25AE%25E3%2583%2581%25E3%2583%25BC%25E3%2583%25A0%25E3%2582%2592%25E8%2587%25AA%25E5%25BE%258B%25E8%2587%25AA%25E8%25B5%25B0%25E3%2581%2595%25E3%2581%259B%25E3%2580%2581%25E6%2588%2590%25E9%2595%25B7%25E7%25B5%2584%25E7%25B9%2594%25E3%2581%25B8%25E5%25A4%2589%25E9%259D%25A9%25E3%2581%2599%25E3%2582%258B%25E3%2581%259F%25E3%2582%2581%25E5%25AE%259F%25E8%25B7%25B5%25E3%2581%2597%25E3%2581%25A6%25E3%2581%2584%25E3%2582%258B%25E3%2581%2593%25E3%2581%25A8%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:hiro-torii%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzY3ZDA0YmVmOTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"/>
                    </a>
                </div>
            {:else}
                <div class="h-48"></div>
            {/if}
        </IntersectionObserver> -->