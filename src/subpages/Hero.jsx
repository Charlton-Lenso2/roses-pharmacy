import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/263780035227", "_blank");
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Trusted Pharmacy Care</h1>

          <p className="hero-subtitle">
            Roses Pharmacy provides reliable medicines, expert advice, and
            compassionate service for families in Mbare National and greater
            Harare.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleWhatsApp}>
              Chat on WhatsApp
            </button>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">Quality Medicines</div>
            <div className="feature-item">Trusted Counsel</div>
            <div className="feature-item">Community Care</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame simple">
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80"
              alt="Pharmacy consultation"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
