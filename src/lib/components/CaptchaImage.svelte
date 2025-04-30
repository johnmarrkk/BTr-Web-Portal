<script context="module">
    // This line disables SSR for this component
    export const ssr = false;
  </script>
  
  <script lang="ts">
    let captchaUrl = '/api/captcha?' + Date.now();
  
    function refreshCaptcha() {
      captchaUrl = '/api/captcha?' + Date.now(); // change image on button click
    }
  </script>
  
  <div class="space-y-2">
    <img src={captchaUrl} alt="CAPTCHA" class="border rounded h-18 w-full" />
    <button
      type="button"
      on:click={refreshCaptcha}
      class="p-2 bg-gray-100 border rounded hover:bg-gray-200"
    >
      🔄 Refresh
    </button>
  </div>
  