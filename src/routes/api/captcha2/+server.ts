import type { RequestHandler } from '@sveltejs/kit';

function generateCaptchaText(length = 5) {
	const chars = 'AaBbCcDdEeFfGgHhJjKkLMmNnPQqRrSsTtUVWwXxYyZz23456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}

function drawCaptchaSvg(text: string): string {
	const width = 400;
	const height = 90;
	const spacing = width / (text.length + 1);

	let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

	// SVG filter for distortion
	svg += `
	<defs>
		<filter id="distortionFilter">
			<feTurbulence type="turbulence" baseFrequency="0.01 0.03" numOctaves="2" result="turbulence"/>
			<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G"/>
		</filter>
		<radialGradient id="noiseGradient">
			<stop offset="0%" stop-color="#222" stop-opacity="0.3"/>
			<stop offset="100%" stop-color="#000" stop-opacity="0"/>
		</radialGradient>
	</defs>
	`;

	// Background
	svg += `<rect width="100%" height="100%" fill="#000"/>`;
	svg += `<rect width="100%" height="100%" fill="url(#noiseGradient)" />`;

	// Noise lines (increased)
	for (let i = 0; i < 10; i++) {
		const x1 = Math.random() * width;
		const y1 = Math.random() * height;
		const x2 = Math.random() * width;
		const y2 = Math.random() * height;
		const dash = Math.random() > 0.5 ? `stroke-dasharray="${Math.random() * 10},${Math.random() * 10}"` : '';
		svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="2" ${dash}/>`;
	}

	// Curved path noise
	for (let i = 0; i < 70; i++) {
		const path = `
			M ${Math.random() * width} ${Math.random() * height}
			C ${Math.random() * width} ${Math.random() * height},
			  ${Math.random() * width} ${Math.random() * height},
			  ${Math.random() * width} ${Math.random() * height}
		`;
		const color = `rgba(150,150,150,${Math.random() * 0.3 + 0.1})`;
		svg += `<path d="${path}" stroke="${color}" fill="none" stroke-width="${Math.random() * 3}"/>`;
	}

	// Noise circles (increased)
	for (let i = 0; i < 60; i++) {
		const cx = Math.random() * width;
		const cy = Math.random() * height;
		const r = Math.random() * 8;
		const color = `rgba(180,180,180,${Math.random() * 0.2 + 0.1})`;
		svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" />`;
	}

	// Random rectangles (new)
	for (let i = 0; i < 20; i++) {
		const x = Math.random() * width;
		const y = Math.random() * height;
		const w = Math.random() * 30;
		const h = Math.random() * 10;
		const color = `rgba(255,255,255,${Math.random() * 0.1})`;
		svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}" />`;
	}

	// Characters with distortion
	svg += `<g filter="url(#distortionFilter)">`;
	for (let i = 0; i < text.length; i++) {
        const jitterX = (Math.random() - 0.5) * 20;
        const jitterY = (Math.random() - 0.5) * 20;
        const x = spacing * (i + 1) + jitterX;
        const y = height / 2 + 6 + jitterY;        
		const rotate = (Math.random() - 0.5) * 60;
		const color = `hsl(${Math.random() * 360}, 90%, 60%)`;
		svg += `<text x="${x}" y="${y}" fill="${color}" font-size="50" font-weight="bold" text-anchor="middle" transform="rotate(${rotate}, ${x}, ${y})">${text[i]}</text>`;
	}
	svg += `</g>`;

	// Transparent overlay for interaction
	svg += `<rect width="100%" height="100%" fill="transparent" pointer-events="all"/>`;

	svg += `</svg>`;
	return svg;
}




export const GET: RequestHandler = async () => {
	const solution = generateCaptchaText();
	const svg = drawCaptchaSvg(solution);

	return new Response(
		JSON.stringify({
			svg,
			solution
		}),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};
