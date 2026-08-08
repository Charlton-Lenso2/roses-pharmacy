import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-badge">About Us</span>

          <h2 className="about-title">
            Best Community Pharmacy That{" "}
            <span className="highlight">You Can Trust</span>
          </h2>

          <p className="about-description">
            At Roses Pharmacy, healthcare is more than dispensing medicines—it
            is about building healthier families and stronger communities in
            Mbare National and Harare.
          </p>

          <div className="about-features">
            <div className="feature-box">
              <div className="feature-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="feature-text">
                <h3>Genuine & Quality Care</h3>
                <p>
                  100% genuine, quality-assured medicines provided by qualified
                  healthcare professionals.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="feature-text">
                <h3>Affordable & Accessible</h3>
                <p>
                  Delivering accessible healthcare solutions and friendly
                  customer service daily.
                </p>
              </div>
            </div>
          </div>

          <a href="#services" className="btn btn-about">
            Learn More About Us
          </a>
        </div>

        <div className="about-visuals">
          <div className="image-grid">
            <div className="img-wrapper img-primary">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                alt="Pharmacist consulting with a patient"
              />
            </div>

            <div className="img-wrapper img-secondary">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
                alt="Pharmacy shelves with genuine medicine"
              />
            </div>
          </div>

          <div className="experience-badge">
            <span className="badge-number">8am - 8pm</span>
            <span className="badge-text">Open Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
