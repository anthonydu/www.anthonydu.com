<script lang="ts">
	import ShowInView from '$lib/components/ShowInView.svelte';
	import nclib from '$lib/img/nclib.webp';
	import ncssc from '$lib/img/ncssc.webp';
	import ncsu from '$lib/img/ncsu.webp';
	import psych from '$lib/img/psych.webp';
	import ubc from '$lib/img/ubc.webp';
</script>

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

	<hr class="sm:col-span-2" />

	<img
		class="mt-1 hidden h-10 justify-self-center sm:col-span-2 sm:block"
		src="https://skillicons.dev/icons?i=java,py,js,ts,svelte,react,nextjs,c,cpp,postgresql&theme=dark"
		alt="Skills: Java, Python, TypeScript, C, C++, Next.js, Tailwind CSS, Supabase"
	/>
	<img
		class="mt-1 h-20 justify-self-center sm:hidden"
		src="https://skillicons.dev/icons?i=java,py,js,ts,svelte,react,nextjs,c,cpp,postgresql&theme=dark&perline=5"
		alt="Skills: Java, Python, TypeScript, C, C++, Next.js, Tailwind CSS, Supabase"
	/>
</ShowInView>

<style lang="postcss">
	h2 {
		@apply text-4xl;
	}
	h3 {
		@apply text-2xl;
	}
	h4 {
		@apply text-xl;
	}
	img.logo {
		@apply float-left mr-2 h-12 w-12 rounded;
	}
</style>
