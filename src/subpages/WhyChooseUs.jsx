import React from "react";
import "./WhyChooseUs.css";

const FEATURES = [
  {
    id: 1,
    title: "Qualified Pharmacists",
    description:
      "Our certified healthcare team provides expert advice and precise prescription filling every day.",
    badge: "Licensed Care",
  },
  {
    id: 2,
    title: "100% Genuine Medicines",
    description:
      "We source directly from licensed, accredited distributors to guarantee safety and efficacy.",
    badge: "Verified Stocks",
  },
  {
    id: 3,
    title: "Open 7 Days a Week",
    description:
      "Convenient daily hours from 8:00 AM to 8:00 PM, ensuring care is ready whenever you need it.",
    badge: "Always Available",
  },
  {
    id: 4,
    title: "Mbare Community Focus",
    description:
      "Deeply rooted at 2 Gwatidzo St, committed to affordable and accessible local healthcare.",
    badge: "Local Hub",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-us-section" id="why-us">
      <div className="why-us-container">
        {/* Left Side: Text Content & Stats */}
        <div className="why-us-content">
          <span className="section-badge">Why Roses Pharmacy</span>
          <h2 className="why-us-title">
            Your Trusted Health Partner in{" "}
            <span className="highlight">Mbare & Beyond</span>
          </h2>
          <p className="why-us-description">
            We bridge professional pharmaceutical care with accessible community
            support. Whether you need a quick prescription refill or
            personalized wellness advice, our door is always open.
          </p>

          <div className="why-us-stats">
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Authentic Drugs</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">7 Days</span>
              <span className="stat-label">Weekly Service</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">Fast</span>
              <span className="stat-label">Local Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Side: Feature Grid Cards */}
        <div className="why-us-grid">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="feature-card">
              <span className="feature-badge">{feature.badge}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
