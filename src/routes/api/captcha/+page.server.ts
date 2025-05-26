export const actions = {
    default: async ({ request, cookies }) => {
      const form = await request.formData();
      const userCaptcha = form.get('captcha')?.toString().trim();
      const realCaptcha = cookies.get('captcha');
  
      if (!userCaptcha || userCaptcha.toUpperCase() !== realCaptcha?.toUpperCase()) {
        return { success: false, error: 'Incorrect CAPTCHA' };
      }
  
      // Proceed with login logic here...
      return { success: true };
    }
  };