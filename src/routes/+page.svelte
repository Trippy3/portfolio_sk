<script lang="ts">
	import '../app.postcss';
	import { fly, fade } from 'svelte/transition';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import zenn from '$lib/images/zenn.svg';
	import qiita from '$lib/images/qiita.png';
	import connpass from '$lib/images/connpass.png';
	import speakerdeck from '$lib/images/speakerdeck.png';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	// console.log("page1: ", data)
	let sort: string = 'latest';
</script>

<svelte:head>
	<meta property="og:site_name" content="Aviary" />
	<meta property="og:title" content="Aviary" />
	<meta property="og:description" content="Portfolio Pages" />
	<meta property="og:url" content="https://aviary.pages.dev/" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://avatars.githubusercontent.com/u/4991409?v=4" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@hirot_san" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<section class="space-y-4 text-center my-10">
		<h1 class="text-5xl font-bold text-left">About</h1>
		<hr class="!border-dashed !border-t-4" />
		<div class="card variant-filled-surface p-4 sm:flex flex-row">
			<div class="basis-1/4 m-4 justify-items-center">
				<Avatar
					src="https://avatars.githubusercontent.com/u/4991409?v=4"
					width="w-32"
					initials="HT"
				/>
			</div>
			<div class="grow basis-3/4">
				<h3 class="text-3xl divide-solid">hiro-torii (Trippy3)</h3>
				<hr class="!border-t-2 mx-4" />
				<p class="p-2 text-left">
					Engineering Managerっぽいことをしています。<br
					/>胸を張ってEMだと言えるようになりたいです。
				</p>
				<hr class="!border-t-2 mx-4" />
				<a
					href="https://github.com/Trippy3"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-icon !bg-transparent"
				>
					<i class="ri-github-fill text-4xl text-surface-100"></i>
				</a>
				<a
					href="https://x.com/hirot_san"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-icon !bg-transparent"
				>
					<i class="ri-twitter-fill text-4xl text-surface-100"></i>
				</a>
				<a
					href="https://zenn.dev/hiro_torii"
					target="_blank"
					rel="noopener noreferrer"
					class="btn p-1"
				>
					<img src={zenn} alt="Zenn" class="w-8" />
				</a>
				<a
					href="https://qiita.com/hiro-torii"
					target="_blank"
					rel="noopener noreferrer"
					class="btn p-1"
				>
					<img src={qiita} alt="Qiita" class="w-8" />
				</a>
				<a
					href="https://connpass.com/user/tori_bird/"
					target="_blank"
					rel="noopener noreferrer"
					class="btn p-1"
				>
					<img src={connpass} alt="connpass" class="w-8" />
				</a>
				<a
					href="https://speakerdeck.com/hiro_torii"
					target="_blank"
					rel="noopener noreferrer"
					class="btn p-1"
				>
					<img src={speakerdeck} alt="speakerdeck" class="w-8" />
				</a>
			</div>
		</div>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="text-5xl font-bold text-left">Activity</h1>
		<hr class="!border-dashed !border-t-4" />
		<!-- TODO: ZennとQiitaはURLからhtmk->meta->ogタグをfetchする, 元となる各記事のアドレスを取ってくるスクリプトを別ファイルで作成 -->
		<div class="flex flex-row">
			<h2 class="text-4xl text-left mr-8">Zenn</h2>
			<!-- <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" padding="px-2 py-1">
				<RadioItem bind:group={sort} name="sort" value="latest"><p class="!text-sm">Latest</p></RadioItem>
				<RadioItem bind:group={sort} name="sort" value="popular"><p class="!text-sm">Popular</p></RadioItem>
			</RadioGroup> -->
		</div>
		<div class="sm:flex flex-wrap">
			{#each Array(3) as _, i}
				<ArticleCard
					delay={50 + 100 * i}
					title={data.zennArticles[i].title}
					pageLink={data.zennArticles[i].pageLink}
					cardLink={data.zennArticles[i].cardLink}
				/>
			{/each}
		</div>

		<div class="flex flex-row">
			<h2 class="text-4xl text-left mr-8">Qiita</h2>
		</div>
		<div class="sm:flex flex-wrap">
			{#each Array(3) as _, i}
				<ArticleCard
					delay={50 + 100 * i}
					title={data.qiitaArticles[i].title}
					pageLink={data.qiitaArticles[i].pageLink}
					cardLink={data.qiitaArticles[i].cardLink}
				/>
			{/each}
		</div>

		<h2 class="text-4xl text-left">GitHub</h2>
		<IntersectionObserver once let:intersecting top={-200}>
			{#if intersecting}
				<div
					class="card variant-filled-surface p-4 sm:grid gap-2 grid-cols-2 justify-items-center"
					in:fade={{ delay: 50, duration: 250 }}
				>
					<div class="base-1/2 m-2">
						<a href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer">
							<img
								alt="github-top-commit"
								class="w-80"
								src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/2-most-commit-language.svg"
							/>
						</a>
					</div>
					<div class="base-1/2 m-2">
						<a
							href="https://github.com/Trippy3"
							target="_blank"
							rel="noopener noreferrer"
							class="flex base-1/2"
						>
							<img
								alt="github-stats"
								class="w-80"
								src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/3-stats.svg"
							/>
						</a>
					</div>
					<div class="col-span-2 m-2">
						<img
							alt="github-grass"
							src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/0-profile-details.svg"
						/>
					</div>
				</div>
			{:else}
				<div class="h-[32rem]"></div>
			{/if}
		</IntersectionObserver>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="text-5xl font-bold text-left">
			<a href="./blog" class="text-green-600 visited:text-purple-600 no-underline hover:underline"
				>Blog</a
			>
		</h1>
		<hr class="!border-dashed !border-t-4" />
		<p>Under construction...</p>
	</section>
</div>
