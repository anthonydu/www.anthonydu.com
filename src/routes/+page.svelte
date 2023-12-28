<script lang="ts">
	import Bubbles from '$lib/components/Bubbles.svelte';
	import ShowInView from '$lib/components/ShowInView.svelte';
	import nclib from '$lib/img/nclib.webp';
	import ncssc from '$lib/img/ncssc.webp';
	import ncsu from '$lib/img/ncsu.webp';
	import psych from '$lib/img/psych.webp';
	import ubc from '$lib/img/ubc.webp';
</script>

<section id="home">
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

<section id="about">
	<ShowInView
		class="relative my-20 grid gap-4 rounded-xl border-2 border-white p-9 sm:w-auto sm:grid-cols-2"
	>
		<h2
			class="absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+0.125em)] bg-black px-1 text-4xl"
		>
			About Me
		</h2>

		<h3 class="-mb-2 sm:col-span-2">Education</h3>
		<div>
			<a href="https://www.linkedin.com/school/universityofbc/" target="_blank" rel="noopener">
				<img class="logo" src={ubc} alt="UBC Logo" />
				<h4 class="leading-[1.2]">
					University of
					<br />
					British Columbia
				</h4>
			</a>
			<p class="mt-1 text-sm">Comp. Sci. B.Sc. | 3.9/4.0 | 2022 - Present</p>
		</div>
		<div>
			<a
				href="https://www.linkedin.com/school/north-carolina-state-university/"
				target="_blank"
				rel="noopener"
			>
				<img class="logo" src={ncsu} alt="NCSU Logo" />
				<h4>
					North Carolina
					<br />
					State University
				</h4>
			</a>
			<p class="mt-1 text-sm">Comp. Engr. | 3.927/4.0 | 2021 - 2022</p>
		</div>

		<h3 class="-mb-2 sm:col-span-2">Experience</h3>
		<div>
			<a
				href="https://www.linkedin.com/company/ubc-department-of-psychology/"
				target="_blank"
				rel="noopener"
			>
				<img class="logo" src={psych} alt="Psych Logo" />
				<h4 class="leading-[1.2]">
					Junior IT
					<br />
					Support Analyst
				</h4>
			</a>
			<p class="mt-1 text-sm">UBC Psychology | Sep &apos;22 - Feb &apos;23</p>
		</div>
		<div>
			<a href="https://www.linkedin.com/company/ncsu-libraries/" target="_blank" rel="noopener">
				<img class="logo" src={nclib} alt="NCLib Logo" />
				<h4 class="leading-[1.2]">
					IT Student
					<br />
					Technician
				</h4>
			</a>
			<p class="mt-1 text-sm">NC State Univ. Libraries | May &apos;22 - Jul &apos;22</p>
		</div>
		<div>
			<a
				href="https://www.linkedin.com/company/nc-state-campus-enterprises/"
				target="_blank"
				rel="noopener"
			>
				<img class="logo" src={ncssc} alt="NCSSC Logo" />
				<h4 class="leading-[1.2]">
					Operations
					<br />
					Assistant
				</h4>
			</a>
			<p class="mt-1 text-sm">NC State Student Centers | Oct &apos;21 - Feb &apos;22</p>
		</div>
		<div>
			<div class="flex h-full w-full items-center justify-center rounded-md border border-white">
				<h4>What&apos;s next...</h4>
			</div>
		</div>

		<hr class="sm:col-span-2" />

		<img
			class="mt-2.5 hidden h-10 justify-self-center sm:col-span-2 sm:block"
			src="https://skillicons.dev/icons?i=java,py,js,ts,svelte,react,nextjs,c,cpp,postgresql&theme=dark"
			alt="Skills: Java, Python, TypeScript, C, C++, Next.js, Tailwind CSS, Supabase"
		/>
		<img
			class="mt-2.5 h-20 justify-self-center sm:hidden"
			src="https://skillicons.dev/icons?i=java,py,js,ts,svelte,react,nextjs,c,cpp,postgresql&theme=dark&perline=5"
			alt="Skills: Java, Python, TypeScript, C, C++, Next.js, Tailwind CSS, Supabase"
		/>
	</ShowInView>
</section>
<section id="projects"></section>
<section id="contact"></section>

<style lang="postcss">
	a {
		@apply transition-transform duration-300 hover:scale-110;
	}

	section {
		@apply flex h-max min-h-screen snap-start snap-always items-center justify-center pt-16 sm:tall:h-screen;
	}

	h2 {
		@apply text-4xl;
	}
	h3 {
		@apply text-2xl;
	}
	h4 {
		@apply text-xl;
	}

	#about img.logo {
		@apply float-left mr-2 h-12 w-12 rounded;
	}
</style>
