// src/routes/api/captcha/+server.ts

import type { RequestHandler } from '@sveltejs/kit';
import { createCanvas } from 'canvas';

import path from 'path';
import { registerFont } from 'canvas';

registerFont(path.resolve('static/fonts/Roboto-Regular.ttf'), {
  family: 'Roboto'
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

  // Simple background color
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // Draw distorted text using a default system font (sans-serif)
  for (let i = 0; i < text.length; i++) {
    const fontSize = 24 + Math.random() * 6;
    ctx.font = `${fontSize}px Roboto`;
    const x = 20 + i * 25 + (Math.random() - 0.5) * 10; // Random horizontal movement
    const y = 40 + (Math.random() - 0.5) * 10; // Random vertical movement
    const angle = (Math.random() - 0.5) * 0.5; // Random rotation angle
  
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`; // Random color for text
    ctx.fillText(text[i], 0, 0);
    ctx.restore();
  }

  // Add random thin lines for distortion (horizontal, vertical, diagonal)
  for (let i = 0; i < 20; i++) {
    const startX = Math.random() * width;
    const startY = Math.random() * height;
    const endX = Math.random() * width;
    const endY = Math.random() * height;
    
    ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`; // Random line opacity for thin lines
    ctx.lineWidth = 0.5 + Math.random() * 1; // Thin line width
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  // Add random dots for distortion
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas.toBuffer('image/png');
}

export const GET: RequestHandler = async ({ cookies }) => {
  try {
    const captcha = generateCaptchaText();
    const image = drawDistortedCaptcha(captcha);

    // Store the captcha text in a cookie for validation later
    cookies.set('captcha', captcha, { path: '/', maxAge: 300 });

    // Return the captcha image with proper headers
    return new Response(image, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store', // Prevent image caching
      },
    });
  } catch (error) {
    console.error('Error generating captcha:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
