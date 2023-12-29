<script lang="ts">
	import '../../app.css';

	import Svg from '$lib/components/Svg.svelte';
	import { onMount } from 'svelte';
	import theme from 'tailwindcss/defaultTheme';

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
		const nextLink: HTMLElement = sectionLinks.querySelector(
			`a:nth-child(${Math.ceil(currentSection)})`
		)!;
		const nextLeft = nextLink.offsetLeft;
		const nextWidth = nextLink.clientWidth;
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

	onMount(setRect);
</script>

<svelte:window on:resize={handleResize} />

<svelte:document on:scroll={handleScroll} />

<main>
	<slot />
</main>

<header
	class={`${
		burgerClicked ? 'h-96' : 'h-16'
	} fixed left-0 top-0 w-full overflow-hidden border-b border-white backdrop-blur transition-all duration-1000 sm:transition-none`}
>
	<nav
		class="mx-auto flex h-96 max-w-6xl flex-col items-center px-7 text-3xl sm:h-full sm:flex-row sm:justify-between sm:text-xl"
	>
		<a class="flex h-16 items-center justify-center sm:h-auto" href="/">
			<b class="!font-iceland">Anthony Du</b>
		</a>

		<div class="contents md:flex md:gap-16" bind:this={sectionLinks}>
			<a class="flex h-16 items-center sm:h-auto" href="/#home">主介面</a>
			<a class="flex h-16 items-center sm:h-auto" href="/#about">關於我</a>
			<a class="flex h-16 items-center sm:h-auto" href="/#projects">個人項目</a>
			<a class="flex h-16 items-center sm:h-auto" href="/#contact">聯絡我</a>
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
		<button class="sm:hidden" type="button" on:click={() => (burgerClicked = !burgerClicked)}>
			<Svg name="hamburger" class="absolute left-6 top-6 h-[1.125rem]" />
		</button>
		<div
			class="absolute top-12 hidden h-[1.5px] bg-white sm:tall:block"
			style={`width: ${w}px; left: ${x}px;`}
		></div>
	</nav>
</header>

<footer
	class="fixed bottom-0 z-50 w-full text-center text-sm underline decoration-dotted *:!font-sans"
>
	<a
		class="peer hover:decoration-solid"
		href="https://github.com/anthonydu/www.anthonydu.com"
		target="_blank"
		rel="noopener"
	>
		&copy;&nbsp;2023&nbsp;Anthony&nbsp;Du&nbsp;&middot;
		從&#8288;心&#8288;開&#8288;始&#8288;，&#8288;用&#8288;愛&#8288;構&#8288;建&nbsp;&hearts;
	</a>
	<a class="whitespace-nowrap hover:decoration-solid" href="/en"> &nbsp;&middot; English 英文 </a>
	<p
		class="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border bg-black px-2 py-px text-xs opacity-0 transition-all peer-hover:-top-5 peer-hover:opacity-100"
	>
		在GitHub上查看原始碼
	</p>
</footer>

<style lang="postcss">
	* {
		@apply font-heiti;
	}
	a {
		@apply transition-transform duration-300 hover:scale-110;
	}
</style>
