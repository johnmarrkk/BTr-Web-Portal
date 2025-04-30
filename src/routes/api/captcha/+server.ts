// 1. src/routes/api/captcha/+server.ts
import { registerFont, createCanvas } from 'canvas';
import type { RequestHandler } from '@sveltejs/kit';


function generateCaptchaText(): string {
	const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
	return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export function drawDistortedCaptcha(text: string): Buffer {
	const width = 150;
	const height = 60;
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext('2d'); // ✅ Make sure this is defined before using

	// Background
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, width, height);

	// Distortion lines
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

	// CAPTCHA text
	for (let i = 0; i < text.length; i++) {
		const fontSize = 24 + Math.random() * 8;
		ctx.font = `${fontSize}px Arial`; // ✅ Using system font — no need for registerFont
		const x = 20 + i * 25 + (Math.random() - 0.5) * 10;
		const y = 35 + Math.random() * 10;
		const angle = (Math.random() - 0.5) * 1.5;

		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(angle);
		ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`;
		ctx.fillText(text[i], 0, 0);
		ctx.restore();
	}

	// Add white noise
	for (let i = 0; i < 100; i++) {
		ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5})`;
		ctx.beginPath();
		ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2, 0, Math.PI * 2);
		ctx.fill();
	}

	// Random white lines
	for (let i = 0; i < 15; i++) {
		ctx.strokeStyle = `rgba(255,255,255,${Math.random() * 0.2})`;
		ctx.beginPath();
		ctx.moveTo(Math.random() * width, Math.random() * height);
		ctx.lineTo(Math.random() * width, Math.random() * height);
		ctx.lineWidth = Math.random() * 2 + 0.5;
		ctx.stroke();
	}

	return canvas.toBuffer('image/png');
}

export const GET: RequestHandler = async ({ cookies }) => {
	const captcha = generateCaptchaText();
	const image = drawDistortedCaptcha(captcha);
	cookies.set('captcha', captcha, { path: '/', maxAge: 300 }); // store for 5 minutes

	return new Response(image, {
		headers: {
			'Content-Type': 'image/png'
		}
	});
};
