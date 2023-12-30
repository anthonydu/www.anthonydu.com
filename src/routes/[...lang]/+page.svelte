<script lang="ts">
	import About from './About.svelte';
	import Bubbles from '../../lib/components/Bubbles.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import type { PageData } from './$types';
	import { onNavigate } from '$app/navigation';

	export let data: PageData;
	let locale = data.locale;

	onNavigate(() => window.location.reload());
</script>

<svelte:head>
	<title>{locale.title}</title>
	<meta name="description" content={locale.description} />
	<meta name="theme-color" content="#000000" />

	<link rel="canonical" href={`https://www.anthonydu.com${data.canonical}`} />
	<link rel="alternate" hreflang="x-default" href="https://www.anthonydu.com" />
	<link rel="alternate" hreflang="en-us" href="https://www.anthonydu.com" />
	<link rel="alternate" hreflang="zh-tw" href="https://www.anthonydu.com/zh" />

	<meta property="og:title" content={locale.title} />
	<meta property="og:description" content={locale.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.anthonydu.com" />
	<meta property="og:image" content="https://www.anthonydu.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content="Anthony Du" />
	<meta property="og:site_name" content="Anthony Du" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:locale:alternate" content="zh_TW" />

	<meta name="robots" content="nofollow, noarchive, noimageindex, nosnippet" />
</svelte:head>

<section
	class="flex h-screen snap-start snap-always items-center justify-center overflow-hidden pt-16"
	style={`font-family: "${data.fonts[1]}", sans-serif`}
	id="home"
>
	<Bubbles words={locale.bubbleWords} />
	<h1
		class="pointer-events-none absolute flex flex-col leading-none *:w-max *:bg-black sm:left-[12%]"
	>
		<p class="[font-size:12vw] sm:text-6xl">{@html locale.home[0]}</p>
		<p class="[font-size:12vw] sm:text-6xl">{@html locale.home[1]}</p>
		<br />
		<p class="leading-[7vw] [font-size:5vw] sm:text-3xl">{@html locale.home[2]}</p>
		<p class="leading-[7vw] [font-size:5vw] sm:text-3xl">{@html locale.home[3]}</p>
	</h1>
</section>

<section id="about"><About locale={locale.about} /></section>
<section id="projects"><Projects locale={locale.projects} /></section>
<section id="contact"><Contact locale={locale.contact} /></section>

<style lang="postcss">
	section:not(#home) {
		@apply flex h-max min-h-screen snap-start snap-always items-center justify-center pt-16 sm:tall:h-screen;
	}
</style>
