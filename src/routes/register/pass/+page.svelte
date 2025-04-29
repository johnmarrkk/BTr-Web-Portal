<script>
  import {
    EyeOutline,
    EyeSlashOutline,
    CheckCircleOutline,
    CloseCircleOutline,
  } from "flowbite-svelte-icons";
  let show = false;
  let show1 = false;
  let password = "";
  let confirmPassword = "";
  let success = false;

  $: hasMinLength = password.length >= 8;
  $: hasUpperCase = /[A-Z]/.test(password);
  $: hasLowerCase = /[a-z]/.test(password);
  $: hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
  $: passwordsMatch =
    password === confirmPassword && confirmPassword.length > 0;

  function handleSubmit() {
    if (
      hasMinLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasSpecialChar &&
      passwordsMatch
    ) {
      success = true;
      password = "";
      alert(password);
      confirmPassword = "";
    } else {
      success = false;
    }
  }
</script>

<div
  class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100"
>
  <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
      Create an Account
    </h2>

    <div class="space-y-5">
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <div class="relative w-full">
          <input
            id="show-password"
            type={show ? "text" : "password"}
            bind:value={password}
            class="mt-1 w-full border border-gray-300 rounded-lg p-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            on:click={() => (show = !show)}
            class="absolute inset-y-0 right-0 mr-2 flex items-center pr-3 text-gray-500"
          >
            {#if show}
              <EyeOutline class="w-6 h-6" />
            {:else}
              <EyeSlashOutline class="w-6 h-6" />
            {/if}
          </button>
        </div>

        <!-- Password Rules -->
        <div class="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
          <h4 class="text-sm font-semibold text-gray-700 mb-2">
            Password must contain:
          </h4>
          <ul class="space-y-1 text-sm">
            <li class="flex items-center gap-2">
              {#if hasMinLength}
                <CheckCircleOutline class="w-6 h-6 text-green-600" />
              {:else}
                <CloseCircleOutline class="w-6 h-6 text-red-600" />
              {/if}
              <span class={hasMinLength ? "text-green-500" : "text-red-500"}
                >At least 8 characters</span
              >
            </li>
            <li class="flex items-center gap-2">
              {#if hasUpperCase}
                <CheckCircleOutline class="w-6 h-6 text-green-600" />
              {:else}
                <CloseCircleOutline class="w-6 h-6 text-red-600" />
              {/if}
              <span class={hasUpperCase ? "text-green-500" : "text-red-500"}
                >One uppercase letter</span
              >
            </li>
            <li class="flex items-center gap-2">
              {#if hasLowerCase}
                <CheckCircleOutline class="w-6 h-6 text-green-600" />
              {:else}
                <CloseCircleOutline class="w-6 h-6 text-red-600" />
              {/if}
              <span class={hasLowerCase ? "text-green-500" : "text-red-500"}
                >One lowercase letter</span
              >
            </li>
            <li class="flex items-center gap-2">
              {#if hasSpecialChar}
                <CheckCircleOutline class="w-6 h-6 text-green-600" />
              {:else}
                <CloseCircleOutline class="w-6 h-6 text-red-600" />
              {/if}
              <span class={hasSpecialChar ? "text-green-500" : "text-red-500"}
                >One special character</span
              >
            </li>
          </ul>
        </div>
      </div>

      <div>
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <div class="relative w-full">
          <input
            id="confirmPassword"
            type={show1 ? "text" : "password"}
            bind:value={confirmPassword}
            class="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            on:click={() => (show1 = !show1)}
            class="absolute inset-y-0 right-0 mr-2 flex items-center pr-3 text-gray-500"
          >
            {#if show1}
              <EyeOutline class="w-6 h-6 text-blue-700" />
            {:else}
              <EyeSlashOutline class="w-6 h-6" />
            {/if}
          </button>
        </div>

        {#if confirmPassword.length > 0}
          <div
            class={passwordsMatch
              ? "text-green-600 text-sm mt-2"
              : "text-red-500 text-sm mt-2"}
          >
            {passwordsMatch
              ? "✔️ Passwords match"
              : "❌ Passwords do not match"}
          </div>
        {/if}
      </div>

      <button
        on:click={handleSubmit}
        class="w-full bg-blue-600 text-white font-semibold p-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        Register
      </button>
    </div>

    {#if success}
      <div class="text-green-600 text-center mt-6 font-semibold">
        🎉 Registration Successful!
      </div>
    {/if}
  </div>
</div>
