import { useState } from "react";
import FadeInSection from "../components/FadeInSection";

const faqs = [
  {
    q: "What is the 'Soaking' process in your AI architecture?",
    a: "The Soaking process is our proprietary data absorption method where our model ingests complex contextual nuances before generating responses. This ensures higher precision and more fine tuned fabrication in specialized technical subjects.",
  },
  {
    q: "What is the 'Soaking' process in your AI architecture?",
    a: "Our architecture uses multi-layered neural processing to understand context deeply, enabling more nuanced and relevant responses tailored to your specific needs.",
  },
  {
    q: "What is the 'Soaking' process in your AI architecture?",
    a: "The system continuously learns from interactions, improving its soaking capability over time for better personalization and accuracy.",
  },
  {
    q: "What is the 'Soaking' process in your AI architecture?",
    a: "Data is processed through multiple validation layers to ensure accuracy, relevance, and contextual appropriateness before any response is generated.",
  },
  {
    q: "What is the 'Soaking' process in your AI architecture?",
    a: "The Soaking process includes secure encryption and anonymization at every stage to protect user data and maintain privacy standards.",
  },
  {
    q: "What is the 'Soaking' process in your AI architecture?",
    a: "Enterprise clients receive dedicated processing pipelines with enhanced soaking capabilities for larger and more complex datasets.",
  },
];

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "Adeyemi Oladipupo",
    email: "adeyemi@soakingarrii.com",
    message: "",
  });

  return (
    <div className="page-wrapper">
      <section className="help-section">
        <div className="container">
          {/* Hero */}
          <FadeInSection>
            <div className="help-hero">
              <h1>
                How can we <span className="highlight">support</span> your
                journey?
              </h1>
              <p>
                Access our specialized intelligence resources, technical
                documentation, and expert support channels.
              </p>
            </div>
          </FadeInSection>

          {/* Search */}
          <FadeInSection delay={100}>
            <div className="help-search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input type="text" placeholder="Search Settings" />
            </div>
          </FadeInSection>

          {/* FAQ + Contact */}
          <div className="help-grid">
            {/* FAQ */}
            <FadeInSection delay={100}>
              <div className="faq-section">
                <h2>
                  <span style={{ color: "var(--amber)", fontSize: "20px" }}>
                    ?
                  </span>
                  Frequently Asked Questions
                </h2>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`faq-item${openFaq === i ? " open" : ""}`}
                  >
                    <div
                      className="faq-question"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                    <div className="faq-answer">{faq.a}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={200}>
              <div className="contact-form-card">
                <h2>Contact Support</h2>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your issue..."
                    rows={5}
                  />
                </div>
                <button
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px",
                  }}
                >
                  Send Intelligent Inquiry
                </button>
              </div>
            </FadeInSection>
          </div>

          {/* Quick Resources */}
          <FadeInSection delay={100}>
            <div className="quick-resources">
              <h2>Quick Resources</h2>
              <div className="resource-items">
                <div className="resource-item">
                  <img src="/doc.png" alt="documentation" />
                  <div>
                    <h4>Documentation</h4>
                    <p>Guides & Setup</p>
                  </div>
                </div>
                <div className="resource-item">
                  <img src="/com.png" alt="community forum" />
                  <div>
                    <h4>Community Forum</h4>
                    <p>Discuss with peers</p>
                  </div>
                </div>
                <div className="resource-item">
                  <img src="/api.png" alt="api reference" />
                  <div>
                    <h4>API References</h4>
                    <p>Endpoints & Schemas</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Tech Gallery */}
          <FadeInSection delay={200}>
            <div className="tech-gallery">
              <div className="tech-gallery-item">
                <img src="/Overlay1.png" alt="Technical Excellence" />
                {/* <div className="tech-gallery-label">Technical Excellence</div> */}
              </div>
              <div className="tech-gallery-item">
                <img src="/Overlay2.png" alt="Real-time Clarity" />
                {/* <div className="tech-gallery-label">Real-time Clarity</div> */}
              </div>
              <div className="tech-gallery-item">
                <img src="/Overlay3.png" alt="Glazed Infrastructure" />
                {/* <div className="tech-gallery-label">Glazed Infrastructure</div> */}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
