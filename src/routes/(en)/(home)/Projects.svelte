<script>
	import ShowInView from '$lib/components/ShowInView.svelte';
	import blog from '$lib/img/blog.webp';
	import place from '$lib/img/place.webp';
	import rentals from '$lib/img/rentals.webp';
</script>

<ShowInView
	class="grid w-80 max-w-6xl grid-cols-1 gap-y-10 text-center sm:w-auto sm:grid-cols-2 md:grid-cols-3"
>
	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">My Personal Blog &ndash; blog.anthonydu.com</p>
		<a
			class="w-full transition-shadow hover:shadow-[0_0_30px_5px] hover:shadow-purple-900"
			href="https://blog.anthonydu.com"
			target="_blank"
			rel="noopener"
			aria-label="blog.anthonydu.com"
		>
			<img src={blog} alt="Screenshot" class="aspect-[1.5] h-auto w-full" />
		</a>

		<p class="relative top-2">My dynamically routed personal blog site built using Next.js!</p>
	</div>

	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">An r/place Clone &ndash; place.anthonydu.com</p>
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
			A full-stack realtime r/place clone with live chat built using Next.js and Supabase.
		</p>
	</div>

	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">Rate My Rentals &ndash; www.ratemyrentals.org</p>
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
			A full-stack dynamically routed review site built using SvelteKit, Supabase, and Google Maps.
		</p>
	</div>
</ShowInView>
