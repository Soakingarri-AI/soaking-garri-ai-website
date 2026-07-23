import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

const features = [
  {
    title: "Welcome to Soakingarri AI",
    desc: "Your intelligent companion for Business, Finance, Learning, and Productivity.",
    img: "/robot-welcome.png",
    glow: "rgba(59,130,246,0.3)",
    glowColor: "#3b82f6",
  },
  {
    title: "Smarter Finance",
    desc: "Track expenses, budgets, and business growth with AI.",
    img: "/robot-finance.png",
    glow: "rgba(245,158,11,0.3)",
    glowColor: "#F59E0B",
  },
  {
    title: "Built for Africa",
    desc: "Understands local business and African realities.",
    img: "/robot-africa.png",
    glow: "rgba(16,185,129,0.3)",
    glowColor: "#10B981",
  },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* LEFT: Text content */}
            <div className="hero-left">
              <h1 className="hero-title">
                Welcome to <span className="gradient-text">SOAKINGARRI AI</span>
                <br />
                The Knowledge Starship
              </h1>
              <p className="hero-desc">
                Step into a new era of digital intelligence where artificial
                minds and human curiosity unite. <strong>SOAKINGARRI AI</strong>{" "}
                isn't just another assistant — it's a starship of knowledge,
                navigating galaxies of data to empower learning, business, and
                innovation.
                <br />
                <br />
                Here, <em>artificial intelligence meets emotional insight</em>,
                transforming how people explore ideas, make decisions, and
                connect with information. From education to finance,{" "}
                <strong>SOAKINGARRI AI</strong> redefines discovery turning
                every conversation into a journey through the cosmos of
                understanding.
              </p>
              <div className="hero-cta">
                <Link to="#features" className="btn-emerald">
                  Explore the features
                </Link>
                <Link to="/signup" className="btn-primary">
                  Get Started &rarr;
                </Link>
              </div>
            </div>

            {/* RIGHT: Phone mockup */}
            <div className="hero-image-wrap">
              <img
                src="/hero-phone.png"
                alt="SOAKINGARRI AI Chat Interface on mobile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <FadeInSection>
        <section className="trusted-section">
          <div className="trusted-marquee">
            <div className="trusted-track">
              {/* First set */}

              <span className="trusted-logo-item">
                <img src="/Booksy.png" alt="Booksy" />
              </span>
              <span className="trusted-logo-item">
                <img src="/NYU.png" alt="NYU" />
              </span>
              <span className="trusted-logo-item">
                <img src="/cornell.png" alt="Cornell University" />
              </span>
              <span className="trusted-logo-item">
                <img src="/DK.png" alt="DK" />
              </span>
              <span className="trusted-logo-item">
                <img src="/university.png" alt="University of Minnesota" />
              </span>
              {/* Duplicate set for seamless loop */}
              <span className="trusted-logo-item">
                <img src="/Booksy.png" alt="Booksy" />
              </span>
              <span className="trusted-logo-item">
                <img src="/NYU.png" alt="NYU" />
              </span>
              <span className="trusted-logo-item">
                <img src="/cornell.png" alt="Cornell University" />
              </span>
              <span className="trusted-logo-item">
                <img src="/DK.png" alt="DK" />
              </span>
              <span className="trusted-logo-item">
                <img src="/university.png" alt="University of Minnesota" />
              </span>
            </div>
          </div>
          <span className="trusted-label">
            Trusted by innovative teams worldwide
          </span>
        </section>
      </FadeInSection>

      {/* ===== FEATURES ===== */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <FadeInSection key={f.title} delay={i * 150}>
                <div className="feature-card">
                  {/* Title + desc ABOVE the robot image — matching Figma */}
                  <h3>{f.title}</h3>
                  <p
                    style={{
                      marginBottom: "28px",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    {f.desc}
                  </p>

                  <div className="feature-robot-wrap">
                    <img
                      src={f.img}
                      alt={f.title}
                      style={{ filter: `drop-shadow(0 0 28px ${f.glow})` }}
                    />
                    {/* Bottom glow pulse ring */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80px",
                        height: "16px",
                        borderRadius: "50%",
                        background: f.glowColor,
                        opacity: 0.25,
                        filter: "blur(8px)",
                      }}
                    />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="feature-cta-row">
              <Link
                to="/signup"
                className="btn-primary"
                style={{ padding: "14px 48px", fontSize: "16px" }}
              >
                Get Started &rarr;
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
