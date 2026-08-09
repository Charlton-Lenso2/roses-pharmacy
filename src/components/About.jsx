import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrescriptionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function RefillIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M21.5 2v6h-6" />
      <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  );
}

const SERVICES_PREVIEW = [
  {
    id: 1,
    title: "Compounding Services",
    desc: "Tailored medication formulations to fit your specific health needs.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Health Screening",
    desc: "Routine BP and blood glucose checks right here in Mbare.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Over The Counter",
    desc: "Quality healthcare supplies and vitamins for your whole family.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Expert Consultation",
    desc: "Direct guidance from our qualified pharmaceutical team.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-container">
          <h1 className="about-hero-title">Where Care Meets Convenience.</h1>
          <p className="about-hero-subtitle">
            Our simplified solutions ensure you manage your health and
            medications effortlessly and effectively.
          </p>

          <div className="about-hero-media-wrapper">
            <div className="about-hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200"
                alt="Roses Pharmacy team assisting patient"
              />
              <div className="about-hero-badge">
                <div className="about-hero-badge-icon">+</div>
                <p>Trusted care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro" id="intro">
        <div className="about-intro-container">
          <div className="about-intro-text">
            <span className="section-badge-pill">Your Partner In Health</span>
            <h2 className="about-intro-heading">Roses Pharmacy</h2>
            <p>
              Experience a wide range of unique pharmacy services designed to
              enhance your well-being. We go beyond dispensing prescriptions by
              offering health solutions tailored to your family.
            </p>
            <p>
              Your health is our priority. Located right in Mbare National, our
              expert team is dedicated to providing personalized care and
              top-notch service every day of the week.
            </p>
          </div>

          <div className="about-intro-graphic">
            <div className="curved-photo-frame">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacist smiling"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-services-banner">
        <div className="about-services-banner-container">
          <span className="section-badge-light">What We Offer</span>
          <h2 className="about-services-banner-title">
            Our Available Services
          </h2>

          <div className="about-services-banner-grid">
            {SERVICES_PREVIEW.map((item) => (
              <div key={item.id} className="service-preview-card">
                <div className="service-preview-card-thumb">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="service-preview-card-title">{item.title}</h3>
                <p className="service-preview-card-desc">{item.desc}</p>
                <NavLink
                  to="/services"
                  className="service-preview-card-action circle-action-btn circle-action-btn--light"
                  aria-label={`View ${item.title}`}
                >
                  <ArrowRightIcon />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-container">
          <div className="about-mission-graphic">
            <div className="curved-photo-frame curved-photo-frame--left">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacy consultation"
              />
            </div>
          </div>

          <div className="about-mission-text">
            <span className="section-badge-pill">
              Committed To Your Well-Being
            </span>
            <h2 className="about-mission-heading">Our Mission Statement</h2>
            <p>
              We are committed to delivering exceptional service and
              personalized care to each of our customers. Our goal is to provide
              healthcare solutions that cater to all your health needs. We
              strive to be a trusted partner in your journey to better health.
            </p>
            <p>
              Together, we can achieve a healthier and happier community across
              Mbare and Harare.
            </p>
            <a href="https://wa.me/263780035227" className="btn-primary-pill">
              Learn More / Chat With Us <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="about-quick-actions">
        <div className="about-quick-actions-container">
          <a
            href="https://wa.me/263780035227?text=Hi,%20I'd%20like%20to%20transfer%20my%20prescription"
            className="action-banner-card"
          >
            <div className="action-banner-card-icon">
              <PrescriptionIcon />
            </div>
            <div className="action-banner-card-info">
              <h3>Transfer Prescription</h3>
              <p>
                Easily transfer your medical prescription to Roses Pharmacy.
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/263780035227?text=Hi,%20I'd%20like%20to%20refill%20my%20prescription"
            className="action-banner-card"
          >
            <div className="action-banner-card-icon">
              <RefillIcon />
            </div>
            <div className="action-banner-card-info">
              <h3>Refill Prescription</h3>
              <p>Quickly order refills and pick them up or request delivery.</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
