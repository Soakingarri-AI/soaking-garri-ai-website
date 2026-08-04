export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (await req.json()) as { name?: string; email?: string };
  const { name, email } = body;

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

    const formsubmitResponse = await fetch('https://formsubmit.co/el/yanoto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ name, email, _captcha: 'false' }),
    });

    if (!formsubmitResponse.ok) {
      const formsubmitError = await formsubmitResponse.text();
      console.error('Formsubmit error:', formsubmitError);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}