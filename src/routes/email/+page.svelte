<script>
	let to = '';
	let subject = '';
	let message = '';
	let result = '';

	async function sendEmail() {
		const res = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ to, subject, message })
		});

		const data = await res.json();
		result = data.success ? '✅ Email sent!' : `❌ Error: ${data.error}`;
	}
</script>

<form on:submit|preventDefault={sendEmail} class="space-y-4">
	<input type="email" bind:value={to} placeholder="Recipient Email" required class="border p-2 w-full" />
	<input type="text" bind:value={subject} placeholder="Subject" required class="border p-2 w-full" />
	<textarea bind:value={message} placeholder="Message" required class="border p-2 w-full"></textarea>
	<button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Send Email</button>
</form>

<p class="mt-2 text-sm text-gray-700">{result}</p>
