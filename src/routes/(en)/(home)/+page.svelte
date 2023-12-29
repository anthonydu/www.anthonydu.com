<script lang="ts">
	import About from './About.svelte';
	import Bubbles from './Bubbles.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
</script>

<svelte:head>
	<title>Anthony Du</title>
	<meta
		name="description"
		content="A motivated computer science and engineering student with strong passion for cutting edge technologies, who seeks to learn, innovate, and solve challenging problems."
	/>
	<meta name="theme-color" content="#000000" />

	<link rel="canonical" href="https://www.anthonydu.com" />
	<link rel="alternate" hreflang="en" href="https://www.anthonydu.com" />
	<link rel="alternate" hreflang="zh-Hant" href="https://www.anthonydu.com/zh" />

	<meta property="og:title" content="Anthony Du" />
	<meta
		property="og:description"
		content="A motivated computer science and engineering student with strong passion for cutting edge technologies, who seeks to learn, innovate, and solve challenging problems."
	/>
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
	id="home"
>
	<Bubbles
		words={[
			'Fast<br>Learner',
			'Team<br>Player',
			'Observant',
			'Motivated',
			'Curious',
			'Creative',
			'Multilingual',
			'Problem<br>Solver',
			'Adaptable',
			'Critical<br>Thinker'
		]}
	/>
	<h1
		class="pointer-events-none absolute flex flex-col font-iceberg leading-none *:w-max *:bg-black sm:left-1/3 sm:-translate-x-1/2 lg:left-1/4"
	>
		<p class="[font-size:12vw] sm:text-6xl">Hi there!</p>
		<p class="[font-size:12vw] sm:text-6xl">I'm Anthony Du</p>
		<br />
		<p class="leading-[7vw] [font-size:5vw] sm:text-3xl">Software Engineer</p>
		<p class="leading-[7vw] [font-size:5vw] sm:text-3xl">Full Stack Developer</p>
		<br />
	</h1>
</section>

<section id="about"><About /></section>
<section id="projects"><Projects /></section>
<section id="contact"><Contact /></section>

<style lang="postcss">
	section:not(#home) {
		@apply flex h-max min-h-screen snap-start snap-always items-center justify-center pt-16 sm:tall:h-screen;
	}
</style>
