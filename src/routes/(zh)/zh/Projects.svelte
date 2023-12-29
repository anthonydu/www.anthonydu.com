<script>
	import ShowInView from '$lib/components/ShowInView.svelte';
	import blog from '$lib/img/blog.webp';
	import place from '$lib/img/place.webp';
	import rentals from '$lib/img/rentals.webp';
</script>

<ShowInView
	class="grid w-80 grid-cols-1 gap-y-10 text-center sm:w-auto sm:grid-cols-2 md:grid-cols-3"
>
	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">我的個人網誌 &mdash; blog.anthonydu.com</p>
		<a
			class="w-full transition-shadow hover:shadow-[0_0_30px_5px] hover:shadow-purple-900"
			href="https://blog.anthonydu.com"
			target="_blank"
			rel="noopener"
			aria-label="blog.anthonydu.com"
		>
			<img src={blog} alt="Screenshot" class="aspect-[1.5] h-auto w-full" />
		</a>

		<p class="relative top-2">我的個人網誌網站，使用Next.js的動態路由技術搭建！</p>
	</div>

	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">我的r/place克隆 &mdash; place.anthonydu.com</p>
		<a
			class="w-full transition-shadow hover:shadow-[0_0_30px_5px] hover:shadow-purple-900"
			href="https://place.anthonydu.com"
			target="_blank"
			rel="noopener"
			aria-label="place.anthonydu.com"
		>
			<img src={place} alt="Screenshot" class="aspect-[1.5] h-auto w-full" />
		</a>

		<p class="relative top-2">
			一個全端實時更新的r/place克隆，附有即時通訊功能，使用Next.js和Supabase搭建。
		</p>
	</div>

	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">租屋評分 &mdash; www.ratemyrentals.org</p>
		<a
			class="w-full transition-shadow hover:shadow-[0_0_30px_5px] hover:shadow-purple-900"
			href="https://www.ratemyrentals.org"
			target="_blank"
			rel="noopener"
			aria-label="www.ratemyrentals.org"
		>
			<img src={rentals} alt="Screenshot" class="aspect-[1.5] h-auto w-full" />
		</a>

		<p class="relative top-2">
			一個全端實時更新的租屋評分網站，使用SvelteKit、Supabase和Google Maps搭建。
		</p>
	</div>
</ShowInView>
