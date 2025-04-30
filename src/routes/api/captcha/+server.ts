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

  // Set background color to black
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  // Starting position for the first letter
  let xPos = 10;
  
  // Calculate total width of text with random font sizes and spacing
  const fontSizes = Array.from(text).map(() => 24 + Math.random() * 6); // Random font sizes for each letter
  const totalWidth = fontSizes.reduce((sum, size) => sum + size + Math.random() * 5, 0);

  // Adjust spacing if the text is too wide for the canvas
  if (totalWidth > width) {
    const scaleFactor = width / totalWidth; // Scale down the text proportionally
    fontSizes.forEach((_, index) => fontSizes[index] *= scaleFactor); // Apply scaling
  }

  // Draw the text using default font and apply distortions
  for (let i = 0; i < text.length; i++) {
    const fontSize = fontSizes[i]; // Use the adjusted font size
    ctx.font = `${fontSize}px`;
    const yPos = 40 + (Math.random() - 0.5) * 10; // Slightly randomize the Y position for each letter
    const angle = (Math.random() - 0.5) * 0.5; // Slight rotation for distortion

    // Save the current context to restore later after applying transformations
    ctx.save();
    ctx.translate(xPos, yPos);
    ctx.rotate(angle);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`; // Random color for each letter
    ctx.fillText(text[i], 0, 0);
    ctx.restore();

    // Increment the X position with the width of the character, leaving some space between
    xPos += fontSize + Math.random() * 5; // Adjusting the spacing between letters
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
