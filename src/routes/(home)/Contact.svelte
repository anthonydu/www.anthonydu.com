<script lang="ts">
	import FloatingInput from '$lib/components/FloatingInput.svelte';
	import ShowInView from '$lib/components/ShowInView.svelte';
	import { sendForm } from '@emailjs/browser';

	let buttonText = 'Submit';
	let disabled = false;
</script>

<ShowInView class="my-20 w-80 sm:w-[500px]">
	<h1 class="mb-1 text-center text-4xl">Contact Me</h1>
	<form
		class="grid grid-cols-2 gap-3 pb-3"
		id="contact-form"
		on:submit|preventDefault={() => {
			buttonText = 'Submitting...';
			disabled = true;
			sendForm('zoho', 'default_template', '#contact-form', 'guRHXdfHUTXd64TTc').then(
				(result) => {
					console.log(result);
					buttonText = 'Form submitted!';
				},
				(error) => {
					console.log(error);
					buttonText = 'Submission failed!';
				}
			);
		}}
	>
		<div>
			<FloatingInput
				type="text"
				id="fname-input"
				name="first-name"
				autocomplete="given-name"
				placeholder="First Name*"
				required
			/>
		</div>

		<div>
			<FloatingInput
				type="text"
				id="lname-input"
				name="last-name"
				autocomplete="family-name"
				placeholder="Last Name*"
				required
			/>
		</div>

		<div>
			<FloatingInput
				type="email"
				id="email-input"
				name="email"
				placeholder="Email*"
				autocomplete="email"
				required
			/>
		</div>
		<div>
			<FloatingInput type="tel" id="phone-input" name="phone" placeholder="Phone" />
		</div>

		<div class="col-span-2 h-28">
			<FloatingInput
				display="area"
				id="message-input"
				name="message"
				placeholder="Message*"
				required
			/>
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
