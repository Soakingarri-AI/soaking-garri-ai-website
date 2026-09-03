import { Link } from "react-router-dom";

const footerLinks: Record<string, { label: string; to: string }[]> = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Home", to: "/" },
  ],
  Product: [
    // { label: "Pricing", to: "/pricing" },
    // { label: "API", to: "#" },
    { label: "Features", to: "/features" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
  // Connect: [
  //   { label: "Twitter", to: "#" },
  //   { label: "LinkedIn", to: "#" },
  // ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <div className="nav-logo-box">
                <img src="/sologo.png" alt="Soakingarri AI" />
              </div>
            </Link>
            <p>
              &copy; {new Date().getFullYear()} Soakingarri AI. Precision in
              Intelligence.
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
      </div>
    </footer>
  );
}
