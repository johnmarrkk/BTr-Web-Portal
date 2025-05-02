<script lang="ts">
	import { onMount } from 'svelte';

	let userAnswer = '';
	let captchaSolution = '';
	let svgCaptcha = '';
	let isVerified = false;
	let error = '';

	async function fetchCaptcha() {
		const res = await fetch('/api/captcha2');
		const data = await res.json();
		svgCaptcha = data.svg;
		captchaSolution = data.solution;
		userAnswer = '';
		isVerified = false;
		error = '';
	}

	onMount(() => {
		fetchCaptcha();
	});

	function verifyCaptcha() {
		if (!userAnswer.trim()) {
			error = 'Please enter the CAPTCHA code.';
			return;
		}

		if (userAnswer.toUpperCase() === captchaSolution) {
			isVerified = true;
			error = '';
            // ✅ Redirect after short delay
			setTimeout(() => {
				window.location.href = '/dashboard'; // Replace with your actual route
			}, 1500); // Optional delay for success message
		} else {
			isVerified = false;
			error = 'INVALID CAPTCHA - Please try again.';
			setTimeout(() => (error = ''), 3000);
		}
	}
</script>

<div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md mx-auto mt-10">
	<h2 class="text-xl font-semibold text-gray-800 mb-4">Verify You're Human</h2>

	<!-- CAPTCHA SVG -->
	<div class="border flex items-center justify-center p-1 mb-3 bg-gray-100 border-dashed rounded text-center">
		{@html svgCaptcha}
	</div>

	<!-- Input and Buttons -->
	<div class="flex gap-2 mb-2">
		<input
			bind:value={userAnswer}
			type="text"
			placeholder="Enter code"
			disabled={isVerified}
			class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
		/>
		<button
			on:click={fetchCaptcha}
			class="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
			title="Refresh"
		>
			🔄
		</button>
		<button
			on:click={verifyCaptcha}
			disabled={!userAnswer || isVerified}
			class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
		>
			Verify
		</button>
	</div>

	<!-- Messages -->
	{#if error}
		<div class="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-center font-bold">
			{error}
		</div>
	{/if}

	{#if isVerified}
		<div class="p-2 bg-green-100 border border-green-400 text-green-700 rounded text-center font-bold">
			✓ Verification successful!
		</div>
	{/if}
</div>
