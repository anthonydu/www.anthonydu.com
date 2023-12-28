<script lang="ts">
	import Svg from '$lib/components/Svg.svelte';

	let w = 0;
	let x = 0;
	let scrollY = 0;
	let sectionLinks: HTMLElement;

	const setRect = () => {
		const numSections = 4;
		const currentSection = (scrollY / document.body.scrollHeight) * numSections + 1;
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

	const onClick = () => {};
</script>

<svelte:window on:resize={setRect} bind:scrollY />

<svelte:document on:scroll={setRect} />

<header
	class="bg-[rgba(0,0,0,0.5)])] fixed left-0 top-0 z-50 h-16 w-full overflow-hidden border-b border-neutral-400 backdrop-blur"
>
	<nav class="mx-auto flex h-full max-w-6xl flex-col justify-between px-8 text-xl sm:flex-row">
		<a class="flex items-center text-center" href="/">
			<b class="font-iceland">Anthony Du</b>
		</a>
		<div class="flex flex-col items-center gap-16 sm:flex-row" bind:this={sectionLinks}>
			<a class="flex-1 text-center" href="#home">Home</a>
			<a class="flex-1 text-center" href="#about">About</a>
			<a class="flex-1 text-center" href="#projects">Projects</a>
			<a class="flex-1 text-center" href="#contact">Contact</a>
		</div>
		<div class="flex items-center gap-2 [&_svg]:h-8 sm:[&_svg]:h-5">
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
		<button class="sm:hidden" type="button" id="nav-menu" on:click={onClick}> </button>
	</nav>
	<div
		class={`absolute top-12 hidden h-[1.5px] bg-white sm:tall:block`}
		style={`width: ${w}px; left: ${x}px;`}
	></div>
</header>
