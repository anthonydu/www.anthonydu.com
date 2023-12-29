<script lang="ts">
	import ShowInView from '$lib/components/ShowInView.svelte';
	import nclib from '$lib/img/nclib.webp';
	import ncssc from '$lib/img/ncssc.webp';
	import ncsu from '$lib/img/ncsu.webp';
	import psych from '$lib/img/psych.webp';
	import ubc from '$lib/img/ubc.webp';
</script>

<ShowInView
	class="relative my-20 grid gap-x-2 gap-y-6 rounded-xl border-2 border-white px-7 py-9 sm:w-auto sm:grid-cols-2"
>
	<h2
		class="absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+0.125em)] bg-black px-1 text-4xl"
	>
		關於我
	</h2>

	<h3 class="-mb-2 sm:col-span-2">教育</h3>
	<div>
		<a
			class="flex"
			href="https://www.linkedin.com/school/universityofbc/"
			target="_blank"
			rel="noopener"
		>
			<img class="logo" src={ubc} alt="UBC Logo" />
			<div>
				<h4>英屬哥倫比亞大學</h4>
				<p class="mt-1 text-sm">計算機科學・3.9/4.0・2022&#8201;-&#8201;至今</p>
			</div>
		</a>
	</div>
	<div>
		<a
			class="flex"
			href="https://www.linkedin.com/school/north-carolina-state-university/"
			target="_blank"
			rel="noopener"
		>
			<img class="logo" src={ncsu} alt="NCSU Logo" />
			<div>
				<h4>北卡羅來納州立大學</h4>
				<p class="mt-1 text-sm">計算機工程・3.927/4.0・2021&#8201;-&#8201;22</p>
			</div>
		</a>
	</div>

	<h3 class="-mb-2 sm:col-span-2">工作經歷</h3>
	<div>
		<a
			class="flex"
			href="https://www.linkedin.com/company/ubc-department-of-psychology/"
			target="_blank"
			rel="noopener"
		>
			<img class="logo" src={psych} alt="Psych Logo" />
			<div>
				<h4>初級IT支援分析師</h4>
				<p class="mt-1 text-sm">UBC心理學部・22/09&#8201;-&#8201;23/02</p>
			</div>
		</a>
	</div>
	<div>
		<a
			class="flex"
			href="https://www.linkedin.com/company/ncsu-libraries/"
			target="_blank"
			rel="noopener"
		>
			<img class="logo" src={nclib} alt="NCLib Logo" />
			<div>
				<h4>IT學生技師</h4>
				<p class="mt-1 text-sm">北卡州立大學圖書館・22/05&#8201;-&#8201;22/07</p>
			</div>
		</a>
	</div>
	<div>
		<a
			class="flex"
			href="https://www.linkedin.com/company/nc-state-campus-enterprises/"
			target="_blank"
			rel="noopener"
		>
			<img class="logo" src={ncssc} alt="NCSSC Logo" />
			<div>
				<h4>營運助理</h4>
				<p class="mt-1 text-sm">北卡州立學生中心・21/10&#8201;-&#8201;22/02</p>
			</div>
		</a>
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
		@apply text-3xl;
	}
	h3 {
		@apply text-xl;
	}
	h4 {
		@apply text-lg leading-tight;
	}
	img.logo {
		@apply float-left mr-2 h-12 w-12 rounded;
	}
</style>
