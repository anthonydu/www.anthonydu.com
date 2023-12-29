<script lang="ts">
	import About from './About.svelte';
	import Bubbles from './Bubbles.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
</script>

<section class="!h-screen" id="home">
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
		class="pointer-events-none absolute flex flex-col leading-none *:w-max *:bg-black sm:left-1/3 sm:-translate-x-1/2 lg:left-1/4"
	>
		<p class="[font-size:12vw] sm:text-6xl">嗨，你好!</p>
		<p class="[font-size:12vw] sm:text-6xl">我是 Anthony Du</p>
		<br />
		<p class="leading-[7vw] [font-size:5vw] sm:text-3xl">全端軟體工程師</p>
		<br />
	</h1>
</section>

<section id="about"><About /></section>
<section id="projects"><Projects /></section>
<section id="contact"><Contact /></section>

<style lang="postcss">
	section {
		@apply flex h-max min-h-screen snap-start snap-always items-center justify-center pt-16 sm:tall:h-screen;
	}
</style>
