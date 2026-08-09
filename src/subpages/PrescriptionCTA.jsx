import React from "react";
import "./PrescriptionCTA.css";

const PHONE_HREF = "+263780035227";
const WHATSAPP_HREF = "263780035227";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.3.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.3.6.9 2.1 1 2.2.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.8 1.8.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1 .3.1.5.2.6.3.1.2.1.9-.2 1.6Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.5.5-.9 1-.9h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
    </svg>
  );
}

const PrescriptionCTA = () => {
  return (
    <section className="prescription-cta">
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="cta-badge">Fast & Convenient</span>
            <h2 className="cta-title">
              Need to Refill a Prescription or Order Medicines?
            </h2>
            <p className="cta-description">
              Snap a picture of your doctor's prescription and send it to us on
              WhatsApp. Our team will verify availability, prices, and prepare
              your order immediately.
            </p>

            <div className="cta-buttons">
              <a
                href={`https://wa.me/${WHATSAPP_HREF}?text=Hello%20Roses%20Pharmacy,%20I%20would%20like%20to%20order/inquire%20about%20a%20prescription.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon />
                <span>Send Prescription via WhatsApp</span>
              </a>
              <a href={`tel:${PHONE_HREF}`} className="btn-phone">
                <PhoneIcon />
                <span>Call +263 78 003 5227</span>
              </a>
            </div>
          </div>

          <div className="cta-steps">
            <div className="step-item">
              <span className="step-num">1</span>
              <div>
                <h4>Snap Photo</h4>
                <p>Take a clear picture of your prescription.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <div>
                <h4>Send Message</h4>
                <p>Share via WhatsApp for instant review.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <div>
                <h4>Collect or Deliver</h4>
                <p>Pick up at Mbare or get local delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrescriptionCTA;
