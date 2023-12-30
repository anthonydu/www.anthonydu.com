<script lang="ts">
	import ShowInView from '../../lib/components/ShowInView.svelte';
	import nclib from '$lib/images/nclib.webp?enhanced';
	import ncssc from '$lib/images/ncssc.webp?enhanced';
	import ncsu from '$lib/images/ncsu.webp?enhanced';
	import psych from '$lib/images/psych.webp?enhanced';
	import ubc from '$lib/images/ubc.webp?enhanced';
	import type { PageData } from './$types';

	export let locale: PageData['locale']['about'];
</script>

<ShowInView
	class="relative my-20 grid gap-4 rounded-xl border-2 border-white p-9 sm:w-auto sm:grid-cols-2"
>
	<h2
		class="absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+0.125em)] bg-black px-1 text-4xl"
	>
		{@html locale.title}
	</h2>

	<h3 class="-mb-2 sm:col-span-2">{@html locale.education}</h3>
	<div>
		<a href="https://www.linkedin.com/school/universityofbc/" target="_blank" rel="noopener">
			<enhanced:img class="logo" src={ubc} alt="UBC Logo" />
			<h4>
				{@html locale.ubc[0]}
			</h4>
		</a>
		<p>{@html locale.ubc[1]}</p>
	</div>
	<div>
		<a
			href="https://www.linkedin.com/school/north-carolina-state-university/"
			target="_blank"
			rel="noopener"
		>
			<enhanced:img class="logo" src={ncsu} alt="NCSU Logo" />
			<h4>
				{@html locale.ncsu[0]}
			</h4>
		</a>
		<p>{@html locale.ncsu[1]}</p>
	</div>

	<h3 class="-mb-2 sm:col-span-2">{@html locale.experience}</h3>
	<div>
		<a
			href="https://www.linkedin.com/company/ubc-department-of-psychology/"
			target="_blank"
			rel="noopener"
		>
			<enhanced:img class="logo" src={psych} alt="Psych Logo" />
			<h4>
				{@html locale.psych[0]}
			</h4>
		</a>
		<p>{@html locale.psych[1]}</p>
	</div>
	<div>
		<a href="https://www.linkedin.com/company/ncsu-libraries/" target="_blank" rel="noopener">
			<enhanced:img class="logo" src={nclib} alt="NCLib Logo" />
			<h4>
				{@html locale.nclib[0]}
			</h4>
		</a>
		<p>{@html locale.nclib[1]}</p>
	</div>
	<div>
		<a
			href="https://www.linkedin.com/company/nc-state-campus-enterprises/"
			target="_blank"
			rel="noopener"
		>
			<enhanced:img class="logo" src={ncssc} alt="NCSSC Logo" />
			<h4 class="leading-[1.2]">
				{@html locale.ncssc[0]}
			</h4>
		</a>
		<p>{@html locale.ncssc[1]}</p>
	</div>

	<hr class="sm:col-span-2" />

	<img
		class="mt-1 hidden h-10 justify-self-center sm:col-span-2 sm:block"
		src="https://skillicons.dev/icons?i=java,py,js,ts,svelte,react,nextjs,c,cpp,postgresql&theme=dark"
		alt="Skills: Java, Python, TypeScript, C, C++, Next.js, Tailwind CSS, Supabase"
		width={461.875}
		height={40}
	/>
	<img
		class="mt-1 h-20 justify-self-center sm:hidden"
		src="https://skillicons.dev/icons?i=java,py,js,ts,svelte,react,nextjs,c,cpp,postgresql&theme=dark&perline=5"
		alt="Skills: Java, Python, TypeScript, C, C++, Next.js, Tailwind CSS, Supabase"
		width={209.492}
		height={80}
	/>
</ShowInView>

<style lang="postcss">
	a {
		@apply flex items-center gap-2;
	}
	h2 {
		@apply text-4xl;
	}
	h3 {
		@apply text-2xl;
	}
	h4 {
		@apply text-xl leading-[1.2];
	}
	p {
		@apply mt-1 w-max whitespace-nowrap text-sm;
	}
	img.logo {
		@apply h-12 w-12 rounded;
	}
</style>
