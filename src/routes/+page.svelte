<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left">About</h1>
		<hr class="!border-dashed" />
		<div class="card variant-filled-surface p-4">
			<Avatar src="https://avatars.githubusercontent.com/u/4991409?v=4" width="w-32" />
			<p>aaa</p>
		</div>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left">Activity</h1>
		<hr class="!border-dashed" />
		<h2 class="text-left">Zenn</h2>
		<div class="card variant-filled-surface p-4">
			<p>aaa</p>
		</div>
		<h2 class="text-left">Qiita</h2>
		<div class="card variant-filled-surface p-4">
			<p>aaa</p>
		</div>
		<h2 class="text-left">GitHub</h2>
		<div class="card variant-filled-surface p-4">
			<p>aaa</p>
		</div>
	</section>
	<section class="space-y-4 text-center my-10">
		<h1 class="font-bold text-left"><a href="./blog">Blog</a></h1>
		<hr class="!border-dashed" />
	</section>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
