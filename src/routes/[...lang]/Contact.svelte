<script lang="ts">
	import FloatingInput from '../../lib/components/FloatingInput.svelte';
	import ShowInView from '../../lib/components/ShowInView.svelte';
	import { sendForm } from '@emailjs/browser';
	import type { PageData } from './$types';

	export let locale: PageData['locale']['contact'];

	let buttonText = locale.submit;
	let disabled = false;
</script>

<ShowInView class="my-20 w-80 sm:w-[500px]">
	<h1 class="mb-4 text-center text-4xl">{@html locale.title}</h1>
	<form
		class="grid grid-cols-2 gap-3 [&_input]:font-sans [&_textarea]:font-sans"
		id="contact-form"
		on:submit|preventDefault={() => {
			buttonText = locale.submitting;
			disabled = true;
			sendForm('zoho', 'template_zh', '#contact-form', 'guRHXdfHUTXd64TTc').then(
				(result) => {
					console.log(result);
					buttonText = locale.submitted;
				},
				(error) => {
					console.log(error);
					buttonText = locale.failed;
				}
			);
		}}
	>
		<div>
			<FloatingInput type="text" id="name" name="name" placeholder={locale.name + '*'} required />
		</div>

		<div class="row-span-3">
			<FloatingInput
				display="area"
				id="message"
				name="message"
				placeholder={locale.message + '*'}
				required
			></FloatingInput>
		</div>

		<div>
			<FloatingInput
				type="email"
				id="email"
				name="email"
				placeholder={locale.email + '*'}
				autoCapitalize="none"
				required
			/>
		</div>

		<div>
			<FloatingInput type="tel" id="phone" name="phone" placeholder={locale.phone} />
		</div>

		<button
			class="col-span-2 h-12 w-full rounded-md border-2 border-white text-lg disabled:!border-gray-500 disabled:text-gray-500"
			type="submit"
			{disabled}
		>
			{buttonText}
		</button>

		<input type="hidden" id="time" name="time" value={new Date().toUTCString()} />
	</form>
</ShowInView>
