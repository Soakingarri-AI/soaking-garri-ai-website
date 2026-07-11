import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';

const leftFeatures = [
  {
    title: 'Advanced Reasoning',
    desc: 'Deep analytical structures designed for high-stakes decision making.',
    image: '/ad.png',
  },
  {
    title: 'Enterprise Security',
    desc: 'Multi-layered encryption with enterprise-grade privacy standards.',
    image: '/en.png',
  },
  {
    title: 'Liquid Latency',
    desc: 'Real-time responses designed for human-AI collaboration.',
    image: '/li.png',
  },
];

export default function Signup() {
  const [form, setForm] = useState({
    name: 'Max Rivera',
    email: 'sales@soakingarri.ai',
    password: '••••••',
  });

  return (
    <div className="page-wrapper">
      <section className="signup-section">
        <div className="container">
          <div className="signup-grid">
            {/* LEFT */}
            <div className="signup-left">
              <FadeInSection>
                <div className="signup-badge">
                    <div className="signup-avatars">
    <img src="avater1.png" alt="" className="signup-avatar" />
    <img src="avater2.png" alt="" className="signup-avatar" />
    <img src="avater3.png" alt="" className="signup-avatar" />
  </div>
  <span className="signup-badge-text">Join 50+ users</span>
</div>
                <h1>
                  The <span className="gradient-text">Knowledge Starship</span>
                </h1>
                <p  style={{color:'#ffffff'}}>
                  Experience the "Quiet Expert." SOAKINGARRI AI processes complex
                  datasets into refined, actionable insights with unprecedented
                  speed and accuracy. Perfect for advance learning.
                </p>
              </FadeInSection>

              <FadeInSection delay={150}>
                <div className="feature-list">
                  {leftFeatures.map((f, i) => (
                    <div key={i} className="feature-list-item">
                     <img src={f.image} alt={f.title} />
                      <div>
                        
                          
                          <h4>{f.title}</h4>
                       
                        <p className=''>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>

            {/* RIGHT: Signup Card */}
            <FadeInSection delay={100}>
              <div className="signup-card">
                <h2>Create your account</h2>
                <p className="sub">Enter your details to begin the journey.</p>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Max Rivera"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="sales@soakingarri.ai"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••"
                  />
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
                    Minimum 10 characters with one special symbol.
                  </p>
                </div>

                <button
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '15px' }}
                >
                  Create Account
                </button>

                <div className="divider-text">OR CONTINUE WITH</div>

                <div className="social-buttons">
                  <button className="social-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                  <button className="social-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    Apple ID
                  </button>
                </div>

                <p className="terms-text">
                  By signing up, you agree to our{' '}
                  <Link to="#">Terms of Service</Link> and{' '}
                  <Link to="#">Privacy Policy</Link>.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
