<script lang="ts">
	import '../../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div style={`display: contents; font-family: "${data.fonts[0]}", sans-serif`}>
	<main>
		<slot />
	</main>

	<Header locale={data.locale.header} />

	<Footer locale={data.locale.footer} />
</div>
