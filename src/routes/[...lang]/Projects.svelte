<script lang="ts">
	import ShowInView from '../../lib/components/ShowInView.svelte';
	import blog from '$lib/images/blog.webp';
	import place from '$lib/images/place.webp';
	import rentals from '$lib/images/rentals.webp';
	import type { PageData } from './$types';

	export let locale: PageData['locale']['projects'];
</script>

<ShowInView
	class="grid w-80 max-w-6xl grid-cols-1 gap-y-10 text-center sm:w-auto sm:grid-cols-2 md:grid-cols-3"
>
	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">{@html locale.blog[0]}</p>
		<a
			class="w-full transition-shadow hover:shadow-[0_0_30px_5px] hover:shadow-purple-900"
			href="https://blog.anthonydu.com"
			target="_blank"
			rel="noopener"
			aria-label="blog.anthonydu.com"
		>
			<img src={blog} alt="Screenshot" class="aspect-[1.5] h-auto w-full" />
		</a>

		<p class="relative top-2">{@html locale.blog[1]}</p>
	</div>

	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">{@html locale.place[0]}</p>
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
			{@html locale.place[1]}
		</p>
	</div>

	<div
		class="flex scale-90 flex-col items-center transition-transform [&:has(>a:hover)]:scale-[.92]"
	>
		<p class="relative bottom-2 whitespace-nowrap">{@html locale.rentals[0]}</p>
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
			{@html locale.rentals[1]}
		</p>
	</div>
</ShowInView>
