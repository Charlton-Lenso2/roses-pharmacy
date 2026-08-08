import { NavLink } from "react-router-dom";
import "./Footer.css";
import roseMark from "../assets/rose-mark.png";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const SERVICES = [
  "Prescription Dispensing",
  "Chronic Disease Support",
  "Mother & Baby Care",
  "Vitamins & Supplements",
  "Blood Pressure Monitoring",
  "Telepharmacy Consultations",
];

const PHONE_1 = "+263 78 003 5227";
const PHONE_1_HREF = "+263780035227";
const PHONE_2 = "+263 71 262 5304";
const PHONE_2_HREF = "+263712625304";
const WHATSAPP_HREF = "263780035227";
const EMAIL = "info@rosespharmacy.co.zw";

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

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
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

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <img src={roseMark} alt="" className="footer__mark" />
              <span className="footer__wordmark">
                Roses <em>Pharmacy</em>
              </span>
            </div>
            <p className="footer__tagline">
              Your trusted community pharmacy in Mbare National, Harare —
              providing quality medicines, professional pharmaceutical care, and
              personalised healthcare solutions for individuals and families.
            </p>
            <a
              className="footer__whatsapp-pill"
              href={`https://wa.me/${WHATSAPP_HREF}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Chat with our pharmacist
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="footer__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list">
              {SERVICES.map((service) => (
                <li key={service}>
                  <NavLink to="/services" className="footer__link">
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get In Touch</h4>
            <ul className="footer__contact">
              <li>
                <PinIcon />
                <span>2 Gwatidzo Street, Mbare National, Harare</span>
              </li>
              <li>
                <ClockIcon />
                <span>Open Daily, 8:00 AM - 8:00 PM</span>
              </li>
              <li>
                <PhoneIcon />
                <span>
                  <a href={`tel:${PHONE_1_HREF}`}>{PHONE_1}</a>
                  {" · "}
                  <a href={`tel:${PHONE_2_HREF}`}>{PHONE_2}</a>
                </span>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>&copy; {year} Roses Pharmacy. All rights reserved.</p>
          <p className="footer__bottom-note">
            Mbare National, Harare, Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}
