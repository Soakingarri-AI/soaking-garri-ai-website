import { useState } from "react";

import FadeInSection from "../components/FadeInSection";
import {
  MessageSquare,
  Settings,
  Puzzle,
  BookOpen,
  Users,
  Image,
} from "lucide-react";

const tools = [
  {
    title: "Ask SoakinGarri",
    icon: MessageSquare,
    desc: "Your everyday AI assistant with deep knowledge of Africa's history, culture, science, business, technology, and education. Ask questions, solve problems, learn new skills, conduct research, generate ideas, and get intelligent guidance tailored to African realities and opportunities.",
  },
  {
    title: "Factorizer",
    icon: Settings,
    desc: "Turn manufacturing dreams into reality. Factorizer helps entrepreneurs, investors, governments, and businesses understand the technical know how to assemble the machines required to have a fully running factory for different products, from food processing to electronics, to machines and etc. Factorizer provides practical pathways to industrial growth, through small, to medium and large factories.",
  },
  {
    title: "InfiniteParts",
    icon: Puzzle,
    desc: "Design and discover machine components with ease. InfiniteParts helps engineers, inventors, manufacturers, and makers generate production-ready parts, explore mechanical designs, and create components suitable for CNC machining, 3D printing, fabrication, and industrial production.",
  },
  {
    title: "ExamFlow",
    icon: BookOpen,
    desc: "The intelligent study companion for African students. ExamFlow helps learners prepare for Common Entrance, Junior WAEC, Senior WAEC, NECO, JAMB, and other examinations through practice questions, personalized learning plans, adaptive testing, performance analysis, and exam-focused guidance.",
  },
  {
    title: "AfroSimulator",
    icon: Users,
    desc: "Experience dynamic conversations between diverse African perspectives through a simulation of chatbots. AfroSimulator features culturally distinct AI personalities inspired by different African communities, allowing users to explore ideas, cultural viewpoints, and collaborative problem-solving through realistic AI-driven discussions.",
  },
  {
    title: "Meme Generator",
    icon: Image,
    desc: "Create funny, shareable contents based on socio-cultural content in seconds. Powered by the SoakinGarri meme engine.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("https://formsubmit.co/soakingarri@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="page-wrapper">
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <FadeInSection>
              <div className="hero-badge">Coming Soon</div>
              <h1 className="hero-title">
                SOAKINGARRI <span>AI</span>
              </h1>
              <p className="hero-tagline">Designed to Solve Real Problems</p>
              <p className="hero-desc">
                SoakinGarri AI is a platform built by Africans for Africans,
                created to solve real-world challenges through practical
                knowledge, innovation, and technology. Whether you&apos;re a
                student preparing for exams, an entrepreneur launching a
                business, an engineer building products, or a company looking to
                manufacture locally, SoakinGarri AI provides the guidance,
                expertise, and tools needed to transform your ideas and raw
                materials into finished products, and machines, and thriving
                factories, by simplifying complex processes.
              </p>
              <p className="hero-mission">
                Our mission is simple:{" "}
                <strong>
                  Empower Africans to build, create, manufacture, innovate, and
                  solve their challenges, using locally accessible knowledge and
                  AI.
                </strong>
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="tools-section">
        <div className="container">
          <FadeInSection>
            <div className="section-header">
              <h2>Our AI Tools</h2>
              <p>
                Powerful, purpose-built tools designed for African innovation,
                education, and manufacturing.
              </p>
            </div>
          </FadeInSection>

          <div className="tools-grid">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <FadeInSection key={tool.title} delay={i * 100}>
                  <div className="tool-card">
                    <div className="tool-icon">
                      <Icon size={26} />
                    </div>
                    <h3>{tool.title}</h3>
                    <p>{tool.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LAUNCHING ===== */}
      <section className="launching-section">
        <div className="container">
          <FadeInSection>
            <div className="launching-card">
              <h2>Launching Soon</h2>
              <p>
                We are working hard to bring these powerful tools to life. As
                development progresses, each tool will become available to the
                public and continue to grow with new features, knowledge, and
                capabilities.
              </p>
              <p className="launching-highlight">
                The future of African innovation, education, manufacturing, and
                entrepreneurship is being built right now.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== WAITLIST ===== */}
      <section className="waitlist-section">
        <div className="container">
          <FadeInSection>
            <div className="waitlist-card">
              <h2>Join the Waitlist</h2>
              <p>
                Join the waitlist today and be among the first to experience
                SoakinGarri AI.
              </p>
              <p className="waitlist-sub">
                Stay updated on launch announcements, early access.
              </p>
              {submitted ? (
                <div className="waitlist-confirmation">
                  <p>You're on the list!</p>
                  <p>
                    Thank you for joining. We&apos;ll keep you updated on launch
                    announcements and early access.
                  </p>
                </div>
              ) : (
                <form
                  className="waitlist-form"
                  onSubmit={handleSubmit}
                >
                  <div className="waitlist-input-wrap">
                    <span className="waitlist-input-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email to join the waitlist"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-waitlist">
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
