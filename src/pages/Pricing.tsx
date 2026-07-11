import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';

const plans = [
  {
    name: 'Starter',
    tagline: 'For personal experimentation',
    price: { monthly: 0, annual: 0 },
    currency: '$',
    features: [
      { label: 'Basic NLP Engine', enabled: true },
      { label: '1,000 requests / month', enabled: true },
      { label: 'Community Support', enabled: true },
      { label: 'Real-time Analytics', enabled: false },
    ],
    cta: 'Get Started',
    ctaTo: '/signup',
    featured: false,
  },
  {
    name: 'Professional',
    tagline: 'Power users & small teams',
    price: { monthly: 49, annual: 39 },
    currency: '$',
    features: [
      { label: 'Advanced NLP Models', enabled: true },
      { label: 'Unlimited requests', enabled: true },
      { label: 'Real-time Analytics', enabled: true },
      { label: 'Priority Email Support', enabled: true },
      { label: 'API Access', enabled: true },
    ],
    cta: 'Start Free Trial',
    ctaTo: '/signup',
    featured: true,
    badge: 'RECOMMENDED',
  },
  {
    name: 'Enterprise',
    tagline: 'Global scale organizations',
    price: { monthly: 300, annual: 249 },
    currency: '$',
    features: [
      { label: 'Bespoke AI Training', enabled: true },
      { label: 'Dedicated Support Team', enabled: true },
      { label: 'Custom Security Audits', enabled: true },
      { label: 'On-premises Deployment', enabled: true },
    ],
    cta: 'Contact Sales',
    ctaTo: '/help',
    featured: false,
  },
];

const stats = [
  { value: 'SOC2 Compliant', img: '/SoC2.png', alt: 'SOC2 Compliant' },
  { value: '99.9% Uptime', img: '/99.png', alt: '99.9% Uptime' },
  { value: 'Robust SDKs', img: '/Robust.png', alt: 'Robust SDKs' },
  { value: 'Neural Tuning', img: '/Nueral.png', alt: 'Neural Tuning' },
];

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="page-wrapper">
      <section className="pricing-section">
        <div className="container">
          <FadeInSection>
            <div className="pricing-hero">
              <h1>Precision in Intelligence</h1>
              <p>
                Choose the perfect cognitive framework for your enterprise or personal
                projects. Scalable AI solutions powered by Soakingarri technology.
              </p>

              <div className="billing-toggle">
                <button
                  className={`billing-option${billing === 'monthly' ? ' active' : ''}`}
                  onClick={() => setBilling('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`billing-option${billing === 'annual' ? ' active' : ''}`}
                  onClick={() => setBilling('annual')}
                >
                  Annual <span className="annual-badge">-20%</span>
                </button>
              </div>
            </div>
          </FadeInSection>

          <div className="pricing-cards">
            {plans.map((plan, i) => (
              <FadeInSection key={plan.name} delay={i * 120}>
                <div className={`pricing-card${plan.featured ? ' featured' : ''}`}>
                  {plan.badge && (
                    <div className="recommended-badge">{plan.badge}</div>
                  )}

                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-tagline">{plan.tagline}</div>

                  <div className="plan-price">
                    <span className="currency">{plan.currency}</span>
                    <span className="amount">{plan.price[billing]}</span>
                    <span className="period">/mo</span>
                  </div>

                  <div className="plan-divider" />

                  <ul className="plan-features">
                    {plan.features.map(f => (
                      <li key={f.label} className={f.enabled ? '' : 'disabled'}>
                        <span className="check">✓</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.ctaTo}
                    className={plan.featured ? 'btn-primary' : 'btn-outline'}
                    style={{ display: 'block', textAlign: 'center', padding: '13px' }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={200}>
            <div className="pricing-stats">
              {stats.map(s => (
                <div key={s.value} className="pricing-stat">
                  <img src={s.img} alt={s.alt} />
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
