<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let className = '';
	export { className as class };
	let element: HTMLElement;
</script>

<IntersectionObserver once {element} let:intersecting>
	<div
		class={`${className} transition-all duration-1000 ${
			intersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
		} `}
		bind:this={element}
		{...$$restProps}
	>
		<slot />
	</div>
</IntersectionObserver>
