import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGIN_URL, SIGNUP_URL } from "../constants/links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: { to: string; label: string; external?: boolean }[] = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/about", label: "About" },
    // { to: "/pricing", label: "Pricing" },
    // { to: "/help", label: "Help" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <div className="nav-logo-box">
              <img src="/sologo.png" alt="Soakingarri AI" />
            </div>
          </Link>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-desktop-cta nav-auth-actions">
            <a
              href={LOGIN_URL}
              className="nav-login-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <a
              href={SIGNUP_URL}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started &rarr;
            </a>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`nav-mobile-menu${mobileOpen ? " open" : ""}`}>
          <ul className="nav-mobile-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                  onClick={closeMobileMenu}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={LOGIN_URL}
            className="btn-emerald nav-mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Login
          </a>
          <a
            href={SIGNUP_URL}
            className="btn-primary nav-mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Get Started &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
}
