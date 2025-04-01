import nodemailer from 'nodemailer';

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {

  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: import.meta.env.EMAIL_USER,
      subject: `Nieuw bericht van ${name}`,
      text: message,
      replyTo: email
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
