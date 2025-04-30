<script>
    let captchaUrl = '/api/captcha2?' + Date.now();
    function refreshCaptcha() {
      captchaUrl = '/api/captcha2?' + Date.now();
    }
  </script>
  
  <img src={captchaUrl} alt="captcha" class="mb-2" />
  <button on:click={refreshCaptcha}>Refresh</button>
  <input type="text" placeholder="Enter CAPTCHA" />
  