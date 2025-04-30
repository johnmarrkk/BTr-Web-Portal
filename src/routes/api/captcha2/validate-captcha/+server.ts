import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { captcha } = await request.json();
  const correctCaptcha = cookies.get('captcha');

  if (captcha === correctCaptcha) {
    // CAPTCHA is valid
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  }

  // CAPTCHA is incorrect
  return new Response(
    JSON.stringify({ success: false }),
    { status: 400 }
  );
};
