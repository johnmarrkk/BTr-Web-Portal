// src/routes/api/captcha/+server.ts

import type { RequestHandler } from '@sveltejs/kit';
import { createCanvas, registerFont } from 'canvas';
import path from 'path';
import { fileURLToPath } from 'url';

// Properly resolve path even after Vercel builds
const __dirname = path.dirname(fileURLToPath(import.meta.url));
registerFont(path.resolve(__dirname, '../../../lib/assets/fonts/Roboto-Regular.ttf'), {
  family: 'Roboto'
});

function generateCaptchaText(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnopqrstuvwxyz23456789';
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function drawCaptcha(text: string): Buffer {
  const width = 150;
  const height = 60;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Black background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // Distortion lines
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = `rgba(255,255,255,0.1)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Letters
  for (let i = 0; i < text.length; i++) {
    const fontSize = 28 + Math.random() * 6;
    ctx.font = `${fontSize}px Roboto`;
    const x = 15 + i * 25 + (Math.random() - 0.5) * 5;
    const y = 40 + (Math.random() - 0.5) * 10;
    const angle = (Math.random() - 0.5) * 0.4;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`;
    ctx.fillText(text[i], 0, 0);
    ctx.restore();
  }

  return canvas.toBuffer('image/png');
}

export const GET: RequestHandler = async ({ cookies }) => {
  const captcha = generateCaptchaText();
  const image = drawCaptcha(captcha);

  cookies.set('captcha', captcha, {
    path: '/',
    maxAge: 300
  });

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png'
    }
  });
};
	