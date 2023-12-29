<script lang="ts">
	import { onMount } from 'svelte';

	let input: HTMLInputElement;
	let cursor: HTMLDivElement;

	let inputValue = '';
	let cursorVisible = false;
	let hintVisible = false;

	onMount(() => {
		setTimeout(() => {
			inputValue = '4';
		}, 1000);

		setTimeout(() => {
			inputValue = '40';
		}, 2000);

		setTimeout(async () => {
			inputValue = '404';
			hintVisible = true;
		}, 3000);

		setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 250);
	});
</script>

<!-- svelte-ignore a11y-autofocus -->
<input
	class="h-0 focus:outline-none"
	type="text"
	bind:value={inputValue}
	on:blur={(e) => e.currentTarget.focus()}
	on:keypress={(e) => (e.currentTarget.selectionStart = inputValue.length)}
	bind:this={input}
	autofocus
/>
<div class="flex h-screen w-full flex-col items-center justify-center gap-2 font-appleii">
	<div class="relative flex flex-row text-4xl">
		<h1 class="h-[1em] w-[3ch] overflow-visible whitespace-pre">{inputValue}</h1>
		<div
			class={`${cursorVisible ? 'visible' : 'invisible'} absolute h-[1em] w-[1ch] backdrop-invert`}
			style={`left: ${inputValue.length}ch`}
			bind:this={cursor}
		></div>
	</div>
	<h2 class="text-2xl">Page not found</h2>
	<a class="underline underline-offset-4" href="/">Continue to main site</a>
	<p
		class={`${
			hintVisible ? 'h-6' : 'h-0'
		} overflow-hidden text-xs leading-6 transition-all duration-1000`}
	>
		(Hint: type something)
	</p>
</div>
