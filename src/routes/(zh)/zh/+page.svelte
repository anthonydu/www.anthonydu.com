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
		content="一位對於尖端科技充滿熱忱的計算機科學學生，就讀於UBC英屬哥倫比亞大學。"
	/>
	<meta name="theme-color" content="#000000" />

	<link rel="canonical" href="https://www.anthonydu.com/zh" />
	<link rel="alternate" hreflang="en" href="https://www.anthonydu.com" />
	<link rel="alternate" hreflang="zh-Hant" href="https://www.anthonydu.com/zh" />

	<meta property="og:title" content="Anthony Du" />
	<meta
		property="og:description"
		content="一位對於尖端科技充滿熱忱的計算機科學學生，就讀於UBC英屬哥倫比亞大學。"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.anthonydu.com/zh" />
	<meta property="og:image" content="https://www.anthonydu.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content="Anthony Du" />
	<meta property="og:site_name" content="Anthony Du" />
	<meta property="og:locale" content="zh_TW" />
	<meta property="og:locale:alternate" content="en_US" />

	<meta name="robots" content="nofollow, noarchive, noimageindex, nosnippet" />
</svelte:head>

<section
	class="flex h-screen snap-start snap-always items-center justify-center overflow-hidden pt-16"
	id="home"
>
	<Bubbles
		words={[
			'學習能力',
			'協作能力',
			'洞察力',
			'積極性',
			'好奇心',
			'創造力',
			'多語能力',
			'解難能力',
			'適應力',
			'批判性思維'
		]}
	/>
	<h1
		class="pointer-events-none absolute flex flex-col leading-none *:w-max *:bg-black sm:left-1/2 sm:-translate-x-1/2 md:left-1/3 lg:left-1/4"
	>
		<p class="py-2 [font-size:10vw] sm:text-5xl">嗨，你好!</p>
		<p class="py-2 [font-size:10vw] sm:text-5xl">我是 Anthony Du</p>
		<p class="mt-2 py-2 [font-size:5vw] sm:text-2xl">全端軟體工程師</p>
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
