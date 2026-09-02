import { Link } from "react-router-dom";
import { ArrowRight, Mic, Plus, Send, Sparkles } from "lucide-react";
import FadeInSection from "../components/FadeInSection";
import { SIGNUP_URL } from "../constants/links";
import { ASK_TOOL, DISCOVERY_CARDS, FEATURE_TOOLS } from "../constants/features";
import "../index2.css";

export default function Features() {
  return (
    <div className="page-wrapper">
      {/* ===== HERO + APP PREVIEW ===== */}
      <section className="features-hero">
        <div className="container">
          <FadeInSection>
            <div className="features-hero-copy">
              <span className="features-eyebrow">Inside the app</span>
              {/* <h1>
                One prompt box.{" "}
                <span className="gradient-text">Six specialist tools.</span>
              </h1> */}
              <p>
                Every SoakinGarri AI tool lives behind the same composer. Ask a
                question outright, or hand it to the tool built for the job.
              </p>
            </div>
          </FadeInSection>

          {/* App composer, as it appears in the product */}
          <FadeInSection delay={120}>
            <div className="app-preview" aria-label="SoakinGarri AI app preview">
              <div className="composer">
                <p className="composer-placeholder">Ask SOAKINGARRI AI</p>
                <div className="composer-actions">
                  <span className="composer-btn" aria-hidden="true">
                    <Plus size={20} />
                  </span>
                  <span className="composer-actions-right">
                    <span className="composer-btn" aria-hidden="true">
                      <Mic size={18} />
                    </span>
                    <span className="composer-btn composer-send" aria-hidden="true">
                      <Send size={18} />
                    </span>
                  </span>
                </div>
              </div>

              <ul className="composer-pills">
                {FEATURE_TOOLS.map((tool) => (
                  <li key={tool.pill}>
                    <a href={`#${tool.pill.toLowerCase()}`}>{tool.pill}</a>
                  </li>
                ))}
              </ul>

              <div className="discovery">
                <h2 className="discovery-heading">Suggested Discovery</h2>
                <div className="discovery-grid">
                  {DISCOVERY_CARDS.map((card) => (
                    <article className="discovery-card" key={card.title}>
                      <div className="discovery-card-top">
                        <span className={`discovery-tag ${card.kind}`}>
                          {card.tag}
                        </span>
                        {card.kind === "research" ? (
                          <ArrowRight size={18} />
                        ) : (
                          <Sparkles size={18} />
                        )}
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== THE ASSISTANT ITSELF ===== */}
      <section className="features-ask">
        <div className="container">
          <FadeInSection>
            <div className="features-ask-card">
              <div className="tool-icon">
                <ASK_TOOL.icon size={26} />
              </div>
              <h2>{ASK_TOOL.title}</h2>
              <p>{ASK_TOOL.desc}</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== TOOL BREAKDOWN ===== */}
      <section className="features-detail">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <h2>What each tool does</h2>
              <p>
                Purpose-built for African innovation, education, and
                manufacturing.
              </p>
            </div>
          </FadeInSection>

          <div className="feature-rows">
            {FEATURE_TOOLS.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <FadeInSection key={tool.title} delay={(i % 2) * 100}>
                  <article
                    className="feature-row"
                    id={tool.pill.toLowerCase()}
                    style={{ "--accent": tool.accent } as React.CSSProperties}
                  >
                    <div className="feature-row-head">
                      <span className="feature-row-icon">
                        <Icon size={24} />
                      </span>
                      <div>
                        <h3>{tool.title}</h3>
                        <p className="feature-row-tagline">{tool.tagline}</p>
                      </div>
                    </div>
                    <p className="feature-row-desc">{tool.desc}</p>
                    <ul className="feature-row-points">
                      {tool.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="features-cta">
        <div className="container">
          <FadeInSection>
            <div className="features-cta-card">
              <h2>Start with a single question</h2>
              <p>
                Create an account and every tool on this page is one prompt
                away.
              </p>
              <div className="hero-cta">
                <a
                  href={SIGNUP_URL}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started &rarr;
                </a>
                <Link to="/about" className="btn-outline">
                  Learn about us
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
