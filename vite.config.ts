import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      tailwindcss(),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      {
        name: 'local-api-handler',
        configureServer(server) {
          server.middlewares.use('/api', (req, res, next) => {
            if (req.url?.includes('submit-email') && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
              req.on('end', async () => {
                try {
                  const { name, email } = JSON.parse(body);

                  const resendApiKey = env.RESEND_API_KEY;

                  console.log('RESEND_API_KEY loaded:', resendApiKey ? 'yes' : 'no');

                  if (!resendApiKey) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Server configuration error' }));
                    return;
                  }

                  await fetch('https://api.resend.com/emails', {
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

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true }));
                } catch (error) {
                  console.error('API ERROR:', error);
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Failed to send email', details: String(error) }));
                }
              });
              return;
            }
            next();
          });
        },
      },
    ],
  }
})