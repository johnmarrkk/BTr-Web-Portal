<script lang="ts">
  export let form: any;
  let captchaSrc = '/api/captcha?' + Date.now();
  const refreshCaptcha = () => captchaSrc = '/api/captcha?' + Date.now();
</script>

<form method="POST" class="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
  <h2 class="text-2xl font-semibold text-gray-800">Login</h2>

  <div class="flex items-center gap-4">
    <img src={captchaSrc} alt="CAPTCHA" class="border rounded h-14" />
    <button type="button" on:click={refreshCaptcha} class="text-sm text-blue-600 hover:underline">Refresh</button>
  </div>

  <input
    type="text"
    name="captcha"
    placeholder="Enter CAPTCHA"
    class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <button
    type="submit"
    class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
  >
    Submit
  </button>

  {#if form?.error}
    <p class="text-red-600 text-sm">{form.error}</p>
  {/if}
</form>