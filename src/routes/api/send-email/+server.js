// @ts-ignore
import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';

// Only load dotenv in dev
if (process.env.NODE_ENV !== 'production') {
	import('dotenv').then(dotenv => dotenv.config());
}

export async function POST({ request }) {
	const { to, subject, message } = await request.json();

	if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
		console.error('Missing SMTP credentials');
		return json({ success: false, error: 'SMTP credentials not found' }, { status: 500 });
	}

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	try {
		await transporter.sendMail({
			from: `"BUREAU OF THE TREASURY - Albay" <${process.env.SMTP_USER}>`,
			to,
			subject,
			html: `<p>${message}</p>`
		});

		return json({ success: true, message: 'Email sent successfully' });
	} catch (error) {
		console.error('Failed to send email:', error);
		// @ts-ignore
		return json({ success: false, error: error.message }, { status: 500 });
	}
}
