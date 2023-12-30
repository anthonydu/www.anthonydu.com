<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let locale: PageData['locale']['footer'];
</script>

<footer
	class="fixed bottom-0 z-50 w-full bg-black text-center font-sans text-sm underline decoration-dotted [&:has(.footer-group:hover)_.footer-group]:decoration-solid"
>
	<a
		class="footer-group peer"
		href="https://github.com/anthonydu/www.anthonydu.com"
		target="_blank"
		rel="noopener"
	>
		{@html locale[0]}
	</a>
	<a
		class="hover:decoration-solid [@media(min-width:500px)]:hidden"
		href={$page.url.pathname === '/zh' ? '/en' : '/zh'}
	>
		{@html locale[1]}
		<br />
	</a>
	<a
		class="footer-group peer"
		href="https://github.com/anthonydu/www.anthonydu.com"
		target="_blank"
		rel="noopener"
	>
		{@html locale[2]}
	</a>
	<a
		class="hover:decoration-solid [@media(max-width:499px)]:hidden"
		href={$page.url.pathname === '/zh' ? '/en' : '/zh'}
	>
		{@html locale[3]}
	</a>
	<p
		class="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border bg-black px-2 py-px text-xs opacity-0 transition-all peer-hover:-top-5 peer-hover:opacity-100"
	>
		{@html locale[4]}
	</p>
</footer>
