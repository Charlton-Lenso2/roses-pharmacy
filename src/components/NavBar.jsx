import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import roseMark from "../assets/rose-mark.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const PHONE_PRIMARY = "+263 78 003 5227";
const PHONE_PRIMARY_HREF = "+263780035227";
const WHATSAPP_HREF = "263780035227";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.5.5-.9 1-.9h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.3.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.3.6.9 2.1 1 2.2.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.8.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1 .3.1.5.2.6.3.1.2.1.9-.2 1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7v5.5l3.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (scrolled) {
      setMenuOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, scrolled]);

  return (
    <header className={`navbar-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar__inner">
          <NavLink
            to="/"
            className="navbar__brand"
            onClick={() => setMenuOpen(false)}
          >
            <img src={roseMark} alt="" className="navbar__mark" />
            <span className="navbar__wordmark">
              Roses <em>Pharmacy</em>
            </span>
          </NavLink>

          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "is-active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="navbar__link-bloom" aria-hidden="true" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              className="navbar__whatsapp"
              href={`https://wa.me/${WHATSAPP_HREF}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a className="navbar__cta" href={`tel:${PHONE_PRIMARY_HREF}`}>
              <PhoneIcon />
              Call Now
            </a>
          </div>

          <button
            type="button"
            className={`navbar__burger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link, index) => (
            <li key={link.to} style={{ transitionDelay: `${index * 40}ms` }}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? "is-active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-info">
          <a
            href={`tel:${PHONE_PRIMARY_HREF}`}
            className="navbar__mobile-info-item"
          >
            <PhoneIcon /> {PHONE_PRIMARY}
          </a>
          <span className="navbar__mobile-info-item">
            Open Daily · 8:00 AM - 8:00 PM
          </span>
          <span className="navbar__mobile-info-item">
            2 Gwatidzo Street, Mbare National, Harare
          </span>
        </div>

        <div className="navbar__mobile-actions">
          <a
            className="navbar__cta navbar__cta--block"
            href={`tel:${PHONE_PRIMARY_HREF}`}
          >
            <PhoneIcon /> Call Now
          </a>
          <a
            className="navbar__whatsapp-block"
            href={`https://wa.me/${WHATSAPP_HREF}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
