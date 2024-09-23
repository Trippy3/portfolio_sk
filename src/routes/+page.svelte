<script lang="ts">
	import '../app.postcss';
	import { Avatar } from '@skeletonlabs/skeleton';
	import zenn from '$lib/images/zenn.svg';
	import qiita from '$lib/images/qiita.png';
	import connpass from '$lib/images/connpass.png';
	import speakerdeck from '$lib/images/speakerdeck.png';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import GitHubActivity from '$lib/components/GitHubActivity.svelte';
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
	<title>Aviary</title>
	<meta name="description" content="Portfolio Pages by hiro-torii" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<section class="space-y-4 text-center my-10">
		<h1 class="h1 text-left">About</h1>
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
				<h3 class="h3 divide-solid">hiro-torii (Trippy3)</h3>
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
	<section class="space-y-4 text-center my-10 mx-4">
		<h1 class="h1 text-left">Activity</h1>
		<hr class="!border-dashed !border-t-4" />
		<!-- TODO: ZennとQiitaはURLからhtmk->meta->ogタグをfetchする, 元となる各記事のアドレスを取ってくるスクリプトを別ファイルで作成 -->
		<div class="space-y-8">
			<div>
				<h2 class="h2 text-left mb-4">Zenn</h2>
				<div class="flex flex-wrap justify-center lg:justify-between gap-4">
					{#each data.zennArticles.slice(0, 3) as article, i}
						<ArticleCard
							delay={50 + 100 * i}
							title={article.title}
							pageLink={article.pageLink}
							cardLink={article.cardLink}
						/>
					{/each}
				</div>
			</div>

			<div>
				<h2 class="h2 text-left mb-4">Qiita</h2>
				<div class="flex flex-wrap justify-center lg:justify-between gap-4">
					{#each data.qiitaArticles.slice(0, 3) as article, i}
						<ArticleCard
							delay={50 + 100 * i}
							title={article.title}
							pageLink={article.pageLink}
							cardLink={article.cardLink}
						/>
					{/each}
				</div>
			</div>

			<div>
				<h2 class="h2 text-left mb-4">GitHub</h2>
				<GitHubActivity delay={500} />
			</div>
		</div>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="h1 text-left">
			<a href="./blog" class="anchor">Blog</a>
		</h1>
		<hr class="!border-dashed !border-t-4" />
		<p>Under construction...</p>
	</section>
</div>
