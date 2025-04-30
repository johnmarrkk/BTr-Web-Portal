// src/routes/api/captcha/+server.ts

import type { RequestHandler } from '@sveltejs/kit';

import { registerFont, createCanvas } from 'canvas';
import path from 'path';

// Register the custom font from the static directory
registerFont(path.resolve(process.cwd(), 'static/fonts/Roboto.ttf'), {
  family: 'Roboto',
});


function generateCaptchaText(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnopqrstuvwxyz23456789';
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function drawDistortedCaptcha(text: string): Buffer {
  const width = 150;
  const height = 60;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 20; i++) {
    ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.bezierCurveTo(
      Math.random() * width, Math.random() * height,
      Math.random() * width, Math.random() * height,
      Math.random() * width, Math.random() * height
    );
    ctx.stroke();
  }

  for (let i = 0; i < text.length; i++) {
	const fontSize = 24 + Math.random() * 6;
	ctx.font = `${fontSize}px Roboto`;
	const x = 20 + i * 25 + (Math.random() - 0.5) * 10;
	const y = 40 + (Math.random() - 0.5) * 10;
	const angle = (Math.random() - 0.5) * 0.5;
  
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(angle);
	ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`;
	ctx.fillText(text[i], 0, 0);
	ctx.restore();
  }
  

  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas.toBuffer('image/png');
}

export const GET: RequestHandler = async ({ cookies }) => {
  const captcha = generateCaptchaText();
  const image = drawDistortedCaptcha(captcha);

  cookies.set('captcha', captcha, { path: '/', maxAge: 300 });

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png'
    }
  });
};
