<script lang="ts">
	import About from './About.svelte';
	import Bubbles from './Bubbles.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
</script>

<section class="!h-screen" id="home">
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
	section {
		@apply flex h-max min-h-screen snap-start snap-always items-center justify-center pt-16 sm:tall:h-screen;
	}
</style>
