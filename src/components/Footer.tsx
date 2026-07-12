import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "#" },
  ],
  Product: [
    { label: "Pricing", to: "/pricing" },
    { label: "API", to: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms", to: "#" },
  ],
  Connect: [
    { label: "Twitter", to: "#" },
    { label: "LinkedIn", to: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: "12px" }}>
              <div className="">
                <Link to="/" className="nav-logo">
                  <div className="nav-logo-box">
                    <img src="/logo.png" alt="Soakingarri AI" />
                  </div>
                </Link>
              </div>
            </div>
            <p>
              The Knowledge Starship.
              <br />
              Precision in Intelligence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-col">
              <h4>{category}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2024 Soakingarri AI. Precision in Intelligence.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
