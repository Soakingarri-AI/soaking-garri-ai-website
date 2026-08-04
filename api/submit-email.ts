import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body as { name?: string; email?: string };

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SoakinGarri AI <hello@soakingarri.com>',
        to: email,
        subject: 'Welcome to SoakinGarri AI!',
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for signing up with SoakinGarri AI. As soon as our tools become available, be rest assured that you will have access to this super AI tool built by Africans.</p>
          <p>Thank you for believing in us.</p>
          <p>Sincerely,<br>SoakinGarri AI Team</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error('Resend error:', resendError);
    }

   const notifyResponse = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${resendApiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'SoakinGarri AI <hello@soakingarri.com>',
    to: 'soakingarri@gmail.com', // wherever signups should land
    subject: 'New Waitlist Signup',
    html: `<p>New signup:</p><p>Name: ${name}</p><p>Email: ${email}</p>`,
  }),
});

if (!notifyResponse.ok) {
  const notifyError = await notifyResponse.text();
  console.error('Notify error:', notifyError);
}

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}