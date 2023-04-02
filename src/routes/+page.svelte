<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import zenn from '$lib/images/zenn.svg';
	import qiita from '$lib/images/qiita.png';
	import connpass from '$lib/images/connpass.png';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	// console.log("page1: ", data)
	let sort: string = 'latest'
</script>

<svelte:head>
	<meta property="og:site_name" content="Aviary">
	<meta property="og:title" content="Aviary">
	<meta property="og:description" content="Portfolio Pages">
	<meta property="og:url" content="https://aviary.pages.dev/">
	<meta property="og:type" content="website">
	<meta property="og:image" content="https://avatars.githubusercontent.com/u/4991409?v=4">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@hirot_san">
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left">About</h1>
		<hr class="!border-dashed !border-t-4" />
		<div class="card variant-filled-surface p-4 sm:flex flex-row">
			<div class="basis-1/4 m-4 justify-items-center">
				<Avatar src="https://avatars.githubusercontent.com/u/4991409?v=4" width="w-32" initials="HT"/>
			</div>
			<div class="grow basis-3/4">
				<h3 class="divide-solid">hiro-torii (Trippy3)</h3>
				<hr class="!border-t-2 mx-4" />
				<p class="p-2 text-left">Engineering Managerっぽいことをしています。<br>胸を張ってEMだと言えるようになりたいです。</p>
				<hr class="!border-t-2 mx-4" />
				<a href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer" class="btn-icon  !bg-transparent">
					<i class="ri-github-fill text-4xl text-surface-100"></i>
				</a>
				<a href="https://twitter.com/hirot_san" target="_blank" rel="noopener noreferrer" class="btn-icon  !bg-transparent">
					<i class="ri-twitter-fill text-4xl text-surface-100"></i>
				</a>
				<a href="https://zenn.dev/hiro_torii" target="_blank" rel="noopener noreferrer" class="btn p-1">
					<img src={zenn} alt="Zenn" class="w-8"/>
				</a>
				<a href="https://qiita.com/hiro-torii" target="_blank" rel="noopener noreferrer" class="btn p-1">
					<img src={qiita} alt="Qiita" class="w-8"/>
				</a>
				<a href="https://connpass.com/user/tori_bird/" target="_blank" rel="noopener noreferrer" class="btn p-1">
					<img src={connpass} alt="connpass" class="w-8"/>
				</a>
			</div>
		</div>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left">Activity</h1>
		<hr class="!border-dashed !border-t-4" />
		<!-- TODO: ZennとQiitaはURLからhtmk->meta->ogタグをfetchする, 元となる各記事のアドレスを取ってくるスクリプトを別ファイルで作成 -->
		<div class="flex flex-row">
			<h2 class="text-left mr-8">Zenn</h2>
			<!-- <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" padding="px-2 py-1">
				<RadioItem bind:group={sort} name="sort" value="latest"><p class="!text-sm">Latest</p></RadioItem>
				<RadioItem bind:group={sort} name="sort" value="popular"><p class="!text-sm">Popular</p></RadioItem>
			</RadioGroup> -->
		</div>
		<div class="sm:flex flex-wrap">
			{#each Array(3) as _, i}
				<ArticleCard delay={250 + 100*i} title={data.zennArticles[i].title} pageLink={data.zennArticles[i].pageLink} cardLink={data.zennArticles[i].cardLink} />
			{/each}
		</div>

		<div class="flex flex-row">
			<h2 class="text-left mr-8">Qiita</h2>
		</div>
		<div class="sm:flex flex-wrap">
			<!-- TODO: each文で各カードを生成 -->
			<IntersectionObserver once let:intersecting top={-100}>
				{#if intersecting}
					<div class="card variant-filled-surface p-4 m-4 sm:mx-2 " transition:fly="{{delay: 250, x: 200}}">
						<a href="https://qiita.com/hiro-torii/items/a917dd7b387815ecf3b4" target="_blank" rel="noopener noreferrer">
							<img alt="qiita1" class="w-80"  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUUzJTgwJTkwUHl0aG9uJUUzJTgwJTkxR2l0SHViJUUzJTgzJUFBJUUzJTgzJTlEJUUzJTgyJUI4JUUzJTgzJTg4JUUzJTgzJUFBJUUzJTgxJThCJUUzJTgyJTg5JUUzJTgzJTlFJUUzJTgzJUJDJUUzJTgyJUI4JUU2JUI4JTg4JUUzJTgxJUJGUHVsbC1SZXF1ZXN0JUUzJTgyJTkyJUU1JThGJTk2JUU1JUJFJTk3JUUzJTgwJTgxJUUzJTgzJUFBJUUzJTgzJUJDJUUzJTgzJTg5JUUzJTgyJUJGJUUzJTgyJUE0JUUzJTgzJUEwJUUzJTgyJTg0JUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgyJUJBJUUzJTgyJTkyJUU1JThGJUFGJUU4JUE2JTk2JUU1JThDJTk2JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz01ZTVhYzY1MDYyYmNmODhhMDU1MWQ1OTgyMjYwMjBhOA&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwaGlyby10b3JpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NTY4MDEyZDcyM2VlMmU4MmI4OGM0MTgxMDRkODc0MzU&blend-x=142&blend-y=491&blend-mode=normal&s=e771fc47d28650fcac7b30fb926e3ac9"/>
						</a>
					</div>
				{:else}
					<div class="h-48"></div>
				{/if}
			</IntersectionObserver>
			<IntersectionObserver once let:intersecting top={-100}>
				{#if intersecting}
					<div class="card variant-filled-surface p-4 m-4 sm:mx-2" transition:fly="{{delay: 350, x: 200}}">
						<a href="https://qiita.com/hiro-torii/items/4dec3ab09cdf866b8645" target="_blank" rel="noopener noreferrer">
							<img alt="qiita2" class="w-80"  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9VWJ1bnR1JTIwMjIuMDQlRTMlODElQUJVYnVudHUlMjBQcm8lRTMlODIlOTIlRTklODElQTklRTclOTQlQTglRTMlODElOTklRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTNkNDgyZmE1ZmM5ZjVlOGU2MThjMDA2MWQ0OTAyOGRl&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwaGlyby10b3JpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NTY4MDEyZDcyM2VlMmU4MmI4OGM0MTgxMDRkODc0MzU&blend-x=142&blend-y=491&blend-mode=normal&s=d75f83a948036f5f7ad234c847b50e3d"/>
						</a>
					</div>
				{:else}
					<div class="h-48"></div>
				{/if}
			</IntersectionObserver>
			<IntersectionObserver once let:intersecting top={-100}>
				{#if intersecting}
					<div class="card variant-filled-surface p-4 m-4 sm:mx-2" transition:fly="{{delay: 450, x: 200}}">
						<a href="https://qiita.com/hiro-torii/items/3327cdfe983729d4fce5" target="_blank" rel="noopener noreferrer">
							<img alt="qiita3" class="w-80"  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUUzJTgyJUE4JUUzJTgzJUIzJUUzJTgyJUI4JUUzJTgzJThCJUUzJTgyJUEyJUU3JUI1JTg0JUU3JUI5JTk0JUU1JTkwJTkxJUU0JUI4JThBJUUzJTgxJUFFJUUzJTgxJTlGJUUzJTgyJTgxJUUzJTgxJUFCJUU4JUExJThDJUUzJTgxJUEzJUUzJTgxJUE2JUUzJTgxJThEJUUzJTgxJTlGJUU2JTk2JUJEJUU3JUFEJTk2JUUzJTgxJUE4JUU2JThDJUFGJUUzJTgyJThBJUU4JUJGJTk0JUUzJTgyJThBJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz05MDEwMWIwNDg1ZmFjOTNhMWEwZmIwMmU1NTQxZmRiZA&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwaGlyby10b3JpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NTY4MDEyZDcyM2VlMmU4MmI4OGM0MTgxMDRkODc0MzU&blend-x=142&blend-y=491&blend-mode=normal&s=9da15109a017a3a29ea41f89c513fed4"/>
						</a>
					</div>
				{:else}
					<div class="h-48"></div>
				{/if}
			</IntersectionObserver>
		</div>

		<h2 class="text-left">GitHub</h2>
		<IntersectionObserver once let:intersecting top={-200}>
			{#if intersecting}
				<div class="card variant-filled-surface p-4 sm:grid gap-2 grid-cols-2 justify-items-center" in:fade="{{delay: 500, duration: 500}}">
					<div class="base-1/2 m-2">
						<a href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer">
							<img alt="github-top-commit" class="w-80"  src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/2-most-commit-language.svg"/>
						</a>
					</div>
					<div class="base-1/2 m-2">
						<a href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer" class="flex base-1/2">
							<img alt="github-stats" class="w-80"  src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/3-stats.svg"/>
						</a>
					</div>
					<div class="col-span-2 m-2">
						<img alt="github-grass" src="https://grass-graph.appspot.com/images/Trippy3.png?width=870"/>
					</div>
				</div>
			{:else}
				<div class="h-[32rem]"></div>
			{/if}
		</IntersectionObserver>	
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left"><a href="./blog">Blog</a></h1>
		<hr class="!border-dashed !border-t-4" />
		<p>Under construction...</p>
	</section>
</div>
