import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/pricing", label: "Pricing" },
    { to: "/help", label: "Help" },
  ];

  const isSignup = location.pathname === "/signup";

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="">
              <img
                src="/logo1.png"
                alt="Soakingarri AI"
                width="150px"
                height="auto"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/signup" className="btn-primary nav-desktop-cta">
            {isSignup ? "Login" : "Get Started"} &rarr;
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`nav-mobile-menu${mobileOpen ? " open" : ""}`}>
          <ul className="nav-mobile-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/signup" className="btn-primary nav-mobile-cta">
            {isSignup ? "Login" : "Get Started"} &rarr;
          </Link>
        </div>
      </div>
    </nav>
  );
}
