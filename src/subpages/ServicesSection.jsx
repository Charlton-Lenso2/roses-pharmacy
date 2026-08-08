import React from "react";
import "./ServicesSection.css";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Prescription Dispensing",
    description:
      "Accurate, timely, and safe dispensing of doctor prescriptions with personalized patient guidance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10.5 20.5 19 12a4.95 4.95 0 1 0-7-7L3.5 13.5a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Pharmacist Consultation",
    description:
      "One-on-one professional advice on medication usage, dosage, interactions, and general health.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "OTC & Wellness Products",
    description:
      "Wide selection of trusted over-the-counter medicines, vitamins, supplements, and personal care items.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Health & BP Screening",
    description:
      "Quick and convenient basic health checks including Blood Pressure and Blood Glucose testing.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Chronic Care Support",
    description:
      "Reliable, continuous medication refilling and management plans for long-term conditions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Express Local Delivery",
    description:
      "Fast and reliable doorstep delivery of critical medicines around Mbare and surrounding Harare areas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">Our Services</span>
          <h2 className="services-title">
            Comprehensive Healthcare Solutions <br />
            <span className="highlight">Tailored for Your Family</span>
          </h2>
          <p className="services-subtitle">
            Expert care, trusted pharmacy essentials, and friendly support
            designed to keep your household healthy.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
