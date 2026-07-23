import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";

export default function About() {
  return (
    <div className="page-wrapper">
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* LEFT: Content */}
            <div className="about-content">
              <FadeInSection>
                <h1>
                  About{" "}
                  <span style={{ color: "var(--amber)" }}>SOAKINGARRI AI</span>
                </h1>
              </FadeInSection>

              <FadeInSection delay={100}>
                <p>Designed to Solve Real Problems</p>
                <p>
                  SoakinGarri AI is a platform built by Africans for Africans,
                  created to solve real-world challenges through practical
                  knowledge, innovation, and technology. Whether you're a
                  student preparing for exams, an entrepreneur launching a
                  business, an engineer building products, or a company looking
                  to manufacture locally, SoakinGarri AI provides the guidance,
                  expertise, and tools needed to transform your ideas and raw
                  materials into finished products, and machines, and thriving
                  factories, by simplifying complex processes.
                </p>
                <p>
                  <strong>
                    Our mission is simple: Empower Africans to build, create,
                    manufacture, innovate, and solve their challenges, using
                    locally accessible knowledge and AI.
                  </strong>{" "}
                  With every conversation, SoakingarriAI learns, adapts, and
                  evolves helping individuals and organizations make smarter
                  decisions, faster.
                </p>
                <p>
                  Powered by advanced algorithms and inspired by the human drive
                  to discover, SoakingarriAI turns data into insight and
                  curiosity into progress.
                </p>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="hero-cta" style={{ marginTop: "36px" }}>
                  <Link to="#" className="btn-emerald">
                    Explore the features
                  </Link>
                  <Link to="/signup" className="btn-primary">
                    Get Started &rarr;
                  </Link>
                </div>
              </FadeInSection>
            </div>

            {/* RIGHT: Phone */}
            <FadeInSection delay={100} className="">
              <div className="about-phone-wrap">
                <img
                  src="/about.png"
                  alt="SAOKINGARRI AI Chat Conversation Interface"
                  style={{
                    borderRadius: "0",
                    background: "transparent",
                    filter: "drop-shadow(0 20px 60px rgba(16,185,129,0.18))",
                  }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
