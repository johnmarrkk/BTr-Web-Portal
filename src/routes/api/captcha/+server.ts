// src/routes/api/captcha/+server.ts

import type { RequestHandler } from '@sveltejs/kit';
import { registerFont, createCanvas } from 'canvas';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Register the font from static/fonts
registerFont(resolve(__dirname, '../../../../static/fonts/Roboto-Regular.ttf'), {
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
  
	// 🌀 More thin lines
	for (let i = 0; i < 20; i++) {
	  ctx.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.3)`;
	  ctx.lineWidth = 1;
	  ctx.beginPath();
	  ctx.moveTo(Math.random()*width, Math.random()*height);
	  ctx.lineTo(Math.random()*width, Math.random()*height);
	  ctx.stroke();
	}
  
	// ➿ Add distorted bezier curves
	for (let i = 0; i < 5; i++) {
	  ctx.strokeStyle = `rgba(255,255,255,0.2)`;
	  ctx.beginPath();
	  ctx.moveTo(Math.random() * width, Math.random() * height);
	  ctx.bezierCurveTo(
		Math.random() * width, Math.random() * height,
		Math.random() * width, Math.random() * height,
		Math.random() * width, Math.random() * height
	  );
	  ctx.stroke();
	}
  
	// ✨ Add white noise
	for (let i = 0; i < 150; i++) {
	  ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
	  ctx.beginPath();
	  ctx.arc(Math.random()*width, Math.random()*height, Math.random()*1.5, 0, Math.PI * 2);
	  ctx.fill();
	}
  
	// 🔤 Draw letters
	for (let i = 0; i < text.length; i++) {
	  ctx.font = `${28 + Math.random() * 4}px Roboto`;
	  ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 70%)`;
	  ctx.save();
	  ctx.translate(20 + i * 25, 35 + (Math.random() * 10 - 5));
	  ctx.rotate((Math.random() - 0.5) * 0.4);
	  ctx.fillText(text[i], 0, 0);
	  ctx.restore();
	}
  
	return canvas.toBuffer('image/png');
  }
  

export const GET: RequestHandler = async ({ cookies }) => {
  try {
    const captcha = generateCaptchaText();
    const image = drawCaptcha(captcha);

    cookies.set('captcha', captcha, { path: '/', maxAge: 300 });

    return new Response(image, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Captcha generation failed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
