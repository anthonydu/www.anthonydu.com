<script lang="ts">
	import Svg from '$lib/components/Svg.svelte';
	import { onMount } from 'svelte';
	import theme from 'tailwindcss/defaultTheme';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let locale: PageData['locale']['header'];

	let w = 0;
	let x = 0;
	let sectionLinks: HTMLElement;
	let burgerClicked = false;

	const setRect = () => {
		const numSections = 4;
		const currentSection = (window.scrollY / document.body.scrollHeight) * numSections + 1;
		const scrollProgress = currentSection % 1;
		const snapDistance = 1 - Math.abs(0.5 - (currentSection % 1)) * 2;
		const currentLink: HTMLElement = sectionLinks.querySelector(
			`a:nth-child(${Math.floor(currentSection)})`
		)!;
		const currentLeft = currentLink.offsetLeft;
		const currentWidth = currentLink.clientWidth;
		const nextLink: HTMLElement | null = sectionLinks.querySelector(
			`a:nth-child(${Math.ceil(currentSection)})`
		);
		const nextLeft = nextLink?.offsetLeft ?? 0;
		const nextWidth = nextLink?.clientWidth ?? 0;
		const diffLeft = nextLeft - currentLeft;
		const diffWidth = nextWidth - currentWidth;
		const averageWidth = (currentWidth + nextWidth) / 2;
		w = scrollProgress * diffWidth + currentWidth + snapDistance * averageWidth;
		x = scrollProgress * diffLeft + currentLeft - (snapDistance * averageWidth) / 2;
	};

	const handleResize = () => {
		setRect();
		if (window.innerWidth >= parseInt(theme.screens.sm)) burgerClicked = false;
	};

	const handleScroll = () => {
		setRect();
		burgerClicked = false;
	};

	onMount(() => {
		const home = sectionLinks.querySelector('a:nth-child(1)')!;
		const interval = setInterval(() => {
			if (home.clientWidth !== w) setRect();
			else clearInterval(interval);
		}, 100);
	});
</script>

<svelte:window on:resize={handleResize} />

<svelte:document on:scroll={handleScroll} />

<header
	class={`${
		burgerClicked ? 'h-96' : 'h-16'
	} fixed left-0 top-0 w-full overflow-hidden border-b border-white backdrop-blur backdrop-brightness-50 transition-all duration-1000 sm:transition-none`}
>
	<nav
		class="mx-auto flex h-96 max-w-6xl flex-col items-center px-7 text-3xl sm:h-full sm:flex-row sm:justify-between sm:text-xl"
	>
		<a class="flex h-16 items-center justify-center font-iceland sm:h-auto" href="/">
			<b>{@html locale.title}</b>
		</a>

		<div class="contents md:flex md:gap-16" bind:this={sectionLinks}>
			<a class="flex h-16 items-center sm:h-auto" href={`${$page.url.pathname}#home`}>
				{@html locale.home}
			</a>
			<a class="flex h-16 items-center sm:h-auto" href={`${$page.url.pathname}#about`}>
				{@html locale.about}
			</a>
			<a class="flex h-16 items-center sm:h-auto" href={`${$page.url.pathname}#projects`}>
				{@html locale.projects}
			</a>
			<a class="flex h-16 items-center sm:h-auto" href={`${$page.url.pathname}#contact`}>
				{@html locale.contact}
			</a>
		</div>

		<div
			class="flex h-16 items-center justify-center gap-3 sm:h-auto sm:gap-2 [&_svg]:h-7 sm:[&_svg]:h-5"
		>
			<a
				href="https://www.flickr.com/people/196183743@N05/"
				target="_blank"
				rel="noreferrer"
				aria-label="flickr"
				class="nav-icon"
			>
				<Svg name="flickr" />
			</a>
			<a
				href="https://github.com/anthonydu"
				target="_blank"
				rel="noreferrer"
				aria-label="github"
				class="nav-icon"
			>
				<Svg name="github" />
			</a>
			<a
				href="https://www.linkedin.com/in/antdu/"
				target="_blank"
				rel="noreferrer"
				aria-label="linkedin"
				class="nav-icon"
			>
				<Svg name="linkedin" />
			</a>
			<a
				href="https://www.youtube.com/@antdu"
				target="_blank"
				rel="noreferrer"
				aria-label="youtube"
				class="nav-icon"
			>
				<Svg name="youtube" />
			</a>
			<a
				href="https://music.apple.com/profile/AnthonyDu"
				target="_blank"
				rel="noreferrer"
				aria-label="youtube"
				class="nav-icon"
			>
				<Svg name="music" />
			</a>
		</div>
		<button
			class="sm:hidden"
			type="button"
			aria-label="menu"
			on:click={() => (burgerClicked = !burgerClicked)}
		>
			<Svg name="hamburger" class="absolute left-6 top-6 h-[1.125rem]" />
		</button>
		<div
			class="absolute top-12 hidden h-[1.5px] bg-white sm:tall:block"
			style={`width: ${w}px; left: ${x}px;`}
		></div>
	</nav>
</header>

<style lang="postcss">
	a {
		@apply transition-transform duration-300 hover:scale-110;
	}
</style>
