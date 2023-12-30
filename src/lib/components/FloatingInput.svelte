<script lang="ts">
	export let id: string;
	export let placeholder: string;
	export let display = 'input';
</script>

{#if display === 'input'}
	<div class="relative h-full w-full">
		<input
			class="peer h-full w-full rounded-md border-2 border-white bg-transparent px-2.5 pb-2 pt-6 placeholder-transparent focus:outline-none"
			{...$$props}
			{...$$restProps}
		/>
		<label
			class="pointer-events-none absolute left-3 top-4 origin-left -translate-y-3 scale-75 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
			for={id}
		>
			{placeholder}
		</label>
	</div>
{/if}

{#if display === 'area'}
	<div class="relative h-full w-full">
		<textarea
			class="peer h-full w-full resize-none rounded-md border-2 border-white bg-transparent px-2.5 pb-3 pt-6 leading-[1.2] placeholder-transparent focus:outline-none"
			{...$$props}
			{...$$restProps}
		/>
		<label
			class="pointer-events-none absolute left-3 top-4 origin-left -translate-y-3 scale-75 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
			for={id}
		>
			{placeholder}
		</label>
	</div>
{/if}
