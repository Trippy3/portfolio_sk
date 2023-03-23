<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import zenn from '$lib/images/zenn.svg';
	import qiita from '$lib/images/qiita.png';
	import connpass from '$lib/images/connpass.png';
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
		<!-- TODO: ZennとQiitaはURLからhtmk->meta->ogタグをfetchする, 元となる各記事のアドレスを取ってくる -->
		<div class="flex flex-row">
			<h2 class="text-left mr-8">Zenn</h2>
			<!-- <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary" padding="px-2 py-1">
				<RadioItem bind:group={sort} name="sort" value="latest"><p class="!text-sm">Latest</p></RadioItem>
				<RadioItem bind:group={sort} name="sort" value="popular"><p class="!text-sm">Popular</p></RadioItem>
			</RadioGroup> -->
		</div>
		<div class="sm:flex flex-wrap">
			<div class="card variant-filled-surface p-4 m-4 sm:mx-2">
				<a href="https://zenn.dev/hiro_torii/articles/06d7e845e146ee" target="_blank" rel="noopener noreferrer">
					<img alt="zenn1" class="w-80"  src="https://res.cloudinary.com/zenn/image/upload/s---HahMiZJ--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E8%25B6%2585%25E9%25AB%2598%25E9%2580%259FDataFrame%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2596%25E3%2583%25A9%25E3%2583%25AA%25E3%2583%25BC%25E3%2580%258CPolars%25E3%2580%258D%25E3%2581%25AB%25E3%2581%25A4%25E3%2581%2584%25E3%2581%25A6%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:hiro-torii%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzY3ZDA0YmVmOTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"/>
				</a>
			</div>
			<div class="card variant-filled-surface p-4 m-4 sm:mx-2">
				<a href="https://zenn.dev/hiro_torii/articles/55ba88f40e2e00" target="_blank" rel="noopener noreferrer">
					<img alt="zenn2" class="w-80"  src="https://res.cloudinary.com/zenn/image/upload/s--AiSpyjRh--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:%25E3%2583%259E%25E3%2583%258D%25E3%2582%25B8%25E3%2583%25A1%25E3%2583%25B3%25E3%2583%2588%25E7%25B3%25BB%25E3%2581%25AE%25E3%2582%25AD%25E3%2583%25A3%25E3%2583%25AA%25E3%2582%25A2%25E3%2583%2591%25E3%2582%25B9%25E3%2582%2592%25E5%25BF%2597%25E6%259C%259B%25E3%2581%2599%25E3%2582%258B%25E4%25BA%25BA%25E5%2590%2591%25E3%2581%2591%25E3%2580%2581%2520%25E6%2597%25A5%25E3%2580%2585%25E3%2581%25AE%25E6%25A5%25AD%25E5%258B%2599%25E3%2581%25A7%25E4%25BC%25B8%25E3%2581%25B0%25E3%2581%2597%25E3%2581%25A6%25E3%2581%2584%25E3%2581%258D%25E3%2581%259F%25E3%2581%2584%25E5%259F%25BA%25E7%25A4%258E%25E8%2583%25BD%25E5%258A%259B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:hiro-torii%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzY3ZDA0YmVmOTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"/>
				</a>
			</div>
			<div class="card variant-filled-surface p-4 m-4 sm:mx-2">
				<a href="https://zenn.dev/hiro_torii/articles/93138ea37c785f" target="_blank" rel="noopener noreferrer">
					<img alt="zenn3" class="w-80"  src="https://res.cloudinary.com/zenn/image/upload/s--Kgxa3y9F--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:10%25E4%25BA%25BA%25E8%25A6%258F%25E6%25A8%25A1%25E3%2581%25AE%25E3%2583%2581%25E3%2583%25BC%25E3%2583%25A0%25E3%2582%2592%25E8%2587%25AA%25E5%25BE%258B%25E8%2587%25AA%25E8%25B5%25B0%25E3%2581%2595%25E3%2581%259B%25E3%2580%2581%25E6%2588%2590%25E9%2595%25B7%25E7%25B5%2584%25E7%25B9%2594%25E3%2581%25B8%25E5%25A4%2589%25E9%259D%25A9%25E3%2581%2599%25E3%2582%258B%25E3%2581%259F%25E3%2582%2581%25E5%25AE%259F%25E8%25B7%25B5%25E3%2581%2597%25E3%2581%25A6%25E3%2581%2584%25E3%2582%258B%25E3%2581%2593%25E3%2581%25A8%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:hiro-torii%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzY3ZDA0YmVmOTEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png"/>
				</a>
			</div>
		</div>

		<div class="flex flex-row">
			<h2 class="text-left mr-8">Qiita</h2>
		</div>
		<div class="sm:flex flex-wrap">
			<div class="card variant-filled-surface p-4 m-4 sm:mx-2">
				<a href="https://qiita.com/hiro-torii/items/a917dd7b387815ecf3b4" target="_blank" rel="noopener noreferrer">
					<img alt="qiita1" class="w-80"  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUUzJTgwJTkwUHl0aG9uJUUzJTgwJTkxR2l0SHViJUUzJTgzJUFBJUUzJTgzJTlEJUUzJTgyJUI4JUUzJTgzJTg4JUUzJTgzJUFBJUUzJTgxJThCJUUzJTgyJTg5JUUzJTgzJTlFJUUzJTgzJUJDJUUzJTgyJUI4JUU2JUI4JTg4JUUzJTgxJUJGUHVsbC1SZXF1ZXN0JUUzJTgyJTkyJUU1JThGJTk2JUU1JUJFJTk3JUUzJTgwJTgxJUUzJTgzJUFBJUUzJTgzJUJDJUUzJTgzJTg5JUUzJTgyJUJGJUUzJTgyJUE0JUUzJTgzJUEwJUUzJTgyJTg0JUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgyJUJBJUUzJTgyJTkyJUU1JThGJUFGJUU4JUE2JTk2JUU1JThDJTk2JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz01ZTVhYzY1MDYyYmNmODhhMDU1MWQ1OTgyMjYwMjBhOA&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwaGlyby10b3JpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NTY4MDEyZDcyM2VlMmU4MmI4OGM0MTgxMDRkODc0MzU&blend-x=142&blend-y=491&blend-mode=normal&s=e771fc47d28650fcac7b30fb926e3ac9"/>
				</a>
			</div>
			<div class="card variant-filled-surface p-4 m-4 sm:mx-2">
				<a href="https://qiita.com/hiro-torii/items/4dec3ab09cdf866b8645" target="_blank" rel="noopener noreferrer">
					<img alt="qiita2" class="w-80"  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9VWJ1bnR1JTIwMjIuMDQlRTMlODElQUJVYnVudHUlMjBQcm8lRTMlODIlOTIlRTklODElQTklRTclOTQlQTglRTMlODElOTklRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTNkNDgyZmE1ZmM5ZjVlOGU2MThjMDA2MWQ0OTAyOGRl&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwaGlyby10b3JpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NTY4MDEyZDcyM2VlMmU4MmI4OGM0MTgxMDRkODc0MzU&blend-x=142&blend-y=491&blend-mode=normal&s=d75f83a948036f5f7ad234c847b50e3d"/>
				</a>
			</div>
			<div class="card variant-filled-surface p-4 m-4 sm:mx-2">
				<a href="https://qiita.com/hiro-torii/items/3327cdfe983729d4fce5" target="_blank" rel="noopener noreferrer">
					<img alt="qiita3" class="w-80"  src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUUzJTgyJUE4JUUzJTgzJUIzJUUzJTgyJUI4JUUzJTgzJThCJUUzJTgyJUEyJUU3JUI1JTg0JUU3JUI5JTk0JUU1JTkwJTkxJUU0JUI4JThBJUUzJTgxJUFFJUUzJTgxJTlGJUUzJTgyJTgxJUUzJTgxJUFCJUU4JUExJThDJUUzJTgxJUEzJUUzJTgxJUE2JUUzJTgxJThEJUUzJTgxJTlGJUU2JTk2JUJEJUU3JUFEJTk2JUUzJTgxJUE4JUU2JThDJUFGJUUzJTgyJThBJUU4JUJGJTk0JUUzJTgyJThBJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9NTYmdHh0LWNsaXA9ZWxsaXBzaXMmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz05MDEwMWIwNDg1ZmFjOTNhMWEwZmIwMmU1NTQxZmRiZA&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwaGlyby10b3JpaSZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NTY4MDEyZDcyM2VlMmU4MmI4OGM0MTgxMDRkODc0MzU&blend-x=142&blend-y=491&blend-mode=normal&s=9da15109a017a3a29ea41f89c513fed4"/>
				</a>
			</div>
		</div>

		<h2 class="text-left">GitHub</h2>
		<div class="card variant-filled-surface p-4 sm:flex flex-row flex-wrap">
			<div class="flex base-1/2 m-2">
				<a href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer">
					<img alt="github-top-commit" class="w-80"  src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/2-most-commit-language.svg"/>
				</a>
			</div>
			<div class="flex base-1/2 m-2">
				<a href="https://github.com/Trippy3" target="_blank" rel="noopener noreferrer" class="flex base-1/2">
					<img alt="github-stats" class="w-80"  src="https://raw.githubusercontent.com/Trippy3/Trippy3/main/profile-summary-card-output/prussian/3-stats.svg"/>
				</a>
			</div>
		</div>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left"><a href="./blog">Blog</a></h1>
		<hr class="!border-dashed !border-t-4" />
		<p>Under construction...</p>
	</section>
</div>
