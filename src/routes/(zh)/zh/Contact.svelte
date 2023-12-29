<script lang="ts">
	import FloatingInput from '$lib/components/FloatingInput.svelte';
	import ShowInView from '$lib/components/ShowInView.svelte';
	import { sendForm } from '@emailjs/browser';

	let buttonText = '傳送';
	let disabled = false;
</script>

<ShowInView class="my-20 w-80 sm:w-[500px]">
	<h1 class="mb-4 text-center text-4xl">聯絡我</h1>
	<form
		class="grid grid-cols-2 gap-3 pb-3 [&_input]:font-sans [&_textarea]:font-sans"
		id="contact-form"
		on:submit|preventDefault={() => {
			buttonText = '傳送中...';
			disabled = true;
			sendForm('zoho', 'template_zh', '#contact-form', 'guRHXdfHUTXd64TTc').then(
				(result) => {
					console.log(result);
					buttonText = '已送達！';
				},
				(error) => {
					console.log(error);
					buttonText = '傳送失敗！';
				}
			);
		}}
	>
		<div>
			<FloatingInput type="text" id="fname-input" name="full-name" placeholder="姓名*" required />
		</div>

		<div class="row-span-3">
			<FloatingInput display="area" id="message-input" name="message" placeholder="訊息*" required
			></FloatingInput>
		</div>

		<div>
			<FloatingInput
				type="email"
				id="email-input"
				name="email"
				placeholder="電郵*"
				autoCapitalize="none"
				required
			/>
		</div>

		<div>
			<FloatingInput type="tel" id="phone-input" name="phone" placeholder="電話號碼" />
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
