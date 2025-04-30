import type { RequestHandler } from '@sveltejs/kit';
import * as svgCaptcha from 'svg-captcha';

export const GET: RequestHandler = async ({ cookies }) => {
  const captcha = svgCaptcha.create({
    size: 5, // Number of characters
    width: 150,
    height: 50,
    background: '#000000',
    color: true,
    noise: 3,
    fontSize: 40,
  });

  cookies.set('captcha', captcha.text, { path: '/', maxAge: 300 });

  return new Response(captcha.data, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
