<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let className = '';
	export { className as class };
	let element: HTMLElement;
</script>

<IntersectionObserver once {element} let:intersecting>
	<div
		class={`observing-intersection ${className} transition-[opacity,transform] duration-1000 ${
			intersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
		} `}
		bind:this={element}
		{...$$restProps}
	>
		<slot />
	</div>
</IntersectionObserver>
<noscript>
	<style>
		.observing-intersection {
			opacity: 1 !important;
			transform: translateY(0) !important;
		}
	</style>
</noscript>
