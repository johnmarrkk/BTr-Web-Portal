<script lang="ts">
  // @ts-nocheck
  import { EyeOutline, EyeSlashOutline, RefreshOutline } from "flowbite-svelte-icons";
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let show = false;
  let email = "";
  let password = "";

  let userAnswer = "";
  let captchaSolution = "";
  let svgCaptcha = "";
  let isVerified = false;
  let error = "";

  // Fetch CAPTCHA data without page refresh
  async function fetchCaptcha() {
    const res = await fetch('/api/captcha2');
    const data = await res.json();
    svgCaptcha = data.svg;
    captchaSolution = data.solution;
    userAnswer = ''; // Reset answer field without refreshing the page
    isVerified = false;
    error = ''; // Clear any error messages
  }

  onMount(() => {
    fetchCaptcha();
  });

  // Verify CAPTCHA input
  function verifyCaptcha() {
    if (!userAnswer.trim()) {
      error = "Please enter the CAPTCHA code.";
      return;
    }

    if (userAnswer === captchaSolution) {
      isVerified = true;
      error = "";

      // Redirect after successful CAPTCHA verification
      setTimeout(() => goto('/dashboard'), 500);
    } else {
      isVerified = false;
      error = "INVALID CAPTCHA - Please try again.";
    }
  }
</script>

<nav class="bg-blue-900 h-16 flex fixed w-full items-center">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="images/BTR_logo.png" class="h-11 m-3" alt="BTR Logo" />
  </a>
  <div class="flex flex-col leading-tight">
    <span class="self-center text-xl font- inter whitespace-nowrap dark:text-white">BUREAU OF THE TREASURY</span>
    <span class="text-xs font-semibold whitespace-nowrap dark:text-white">REGIONAL OFFICE V</span>
  </div>

  <div class="flex items-center mr-3 ml-auto space-x-4">
    <img src="images/DOF-logo.png" class="h-11" alt="DOF Logo" />
    <img src="images/BagongPilipinas-logo.png" class="h-11" alt="Bagong Pilipinas Logo" />
  </div>
</nav>

<div class="w-full pt-5 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  style="width: 100%; z-index: -1; background-image: url('images/BTRV-Building.jpg'); background-size: cover;">
  <div class="w-110 h-auto bg-white rounded-2xl shadow-2xl border border-gray-300 md:mt-0">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-center font-bold text-2xl">BTR Services System</h1>
      <form class="space-y-4 md:space-y-6" method="POST">
        <!-- Email Input -->
        <div class="relative">
          <input
            type="email"
            id="email"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm font-semibold text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
            placeholder=""
            required
            bind:value={email}
          />
          <label for="email" class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Email
          </label>
        </div>

        <!-- Password Input -->
        <div class="relative w-full">
          <input
            id="show-password"
            type={show ? "text" : "password"}
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm font-semibold text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
            required
            placeholder=""
            bind:value={password}
          />
          <label for="password" class="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Password
          </label>
          <button
            type="button"
            on:click={() => (show = !show)}
            class="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500 cursor-pointer"
          >
            {#if show}
              <EyeOutline class="w-6 h-6" />
            {:else}
              <EyeSlashOutline class="w-6 h-6" />
            {/if}
          </button>
        </div>

        <!-- CAPTCHA Section -->
        <div>
          <!-- CAPTCHA SVG -->
          <div class="border flex items-center justify-center p-1 mb-3 bg-gray-100 border-dashed rounded text-center">
            {@html svgCaptcha}
          </div>

          <!-- Input and Refresh Button -->
          <div class="flex gap-2 mb-2">
            <input
              bind:value={userAnswer}
              type="text"
              placeholder="Enter CAPTCHA"
              disabled={isVerified}
              on:input={(e) => userAnswer = e.target.value.toUpperCase()}
              class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
            />
            <button
            type="button"
              on:click={fetchCaptcha} 
              class="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              🔄
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

        <!-- Forgot Password Link -->
        <div class="flex items-center justify-between">
          <a
            href="/"
            class="text-sm font-medium text-primary-600 hover:underline dark:text-blue-600"
            >Forgot password?</a
          >
        </div>

        <!-- Login Button -->
        <button
          type="button"
          on:click={verifyCaptcha}
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 disabled:bg-gray-300 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
        >
          Login
        </button>
        
        <!-- Create Account Link -->
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a
            href="/register"
            class="font-medium text-primary-600 hover:underline dark:text-blue-600"
            >Create Account</a
          >
        </p>
      </form>
    </div>
  </div>
</div>
