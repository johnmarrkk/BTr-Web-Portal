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

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  let xPos = 10;

  const fontSizes = Array.from(text).map(() => 24 + Math.random() * 6); 
  const totalWidth = fontSizes.reduce((sum, size) => sum + size + Math.random() * 5, 0);

  if (totalWidth > width) {
    const scaleFactor = width / totalWidth; 
    fontSizes.forEach((_, index) => fontSizes[index] *= scaleFactor); 
  }

  for (let i = 0; i < text.length; i++) {
	const yPos = 45 + (Math.random() - 0.5) * 10;  // Adjusted yPos to fit larger text
	const angle = (Math.random() - 0.5) * 0.5;  // Random rotation angle
  
	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate(angle);
	
	// Increased font size to make letters larger
	ctx.font = '24px sans-serif';  // Set larger font size
	ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`; // Random color for each letter
	
	// Draw the letter at the adjusted position
	ctx.fillText(text[i], 0, 0);
	ctx.restore();
  
	// Adjusted horizontal spacing to prevent overlapping with larger text
	xPos += 20 + Math.random() * 10;
  }
  

  // Add random noise (lines and circles) for distortion
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Add random circles to further distort
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
