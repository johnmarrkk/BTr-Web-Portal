import type { RequestHandler } from '@sveltejs/kit';
import { createCanvas } from 'canvas';

function generateCaptchaText(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnopqrstuvwxyz23456789';
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function drawCaptcha(text: string): Buffer {
  const width = 150;
  const height = 60;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background color
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // Text styling and distortion
  ctx.fillStyle = '#fff';
  ctx.font = '30px sans-serif';  // Use basic sans-serif font
  ctx.textBaseline = 'middle';

  // Draw the captcha text
  for (let i = 0; i < text.length; i++) {
    const x = 20 + i * 25 + (Math.random() - 0.5) * 10;
    const y = 30 + (Math.random() - 0.5) * 10;
    const angle = (Math.random() - 0.5) * 0.5;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillText(text[i], 0, 0);
    ctx.restore();
  }

  // Add random lines and noise
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  return canvas.toBuffer('image/png');
}

export const GET: RequestHandler = async ({ cookies }) => {
  const captcha = generateCaptchaText();
  const image = drawCaptcha(captcha);

  cookies.set('captcha', captcha, { path: '/', maxAge: 300 });

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
