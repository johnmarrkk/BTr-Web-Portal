import type { RequestHandler } from '@sveltejs/kit';
import { createCanvas } from 'canvas';

function generateCaptchaText(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function drawCaptcha(text: string): Buffer {
  const width = 150;
  const height = 60;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background color
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // Draw the text in random positions, without fonts
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'middle';

  // Draw random distorted lines and shapes for noise
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

  // Add random noise with lines and dots
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Add random circles
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 3, 0, Math.PI * 2);
    ctx.fill();
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
