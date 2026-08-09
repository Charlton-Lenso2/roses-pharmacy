import React, { useState } from "react";
import "./Services.css";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
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

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10.5 20.5l-7-7a5 5 0 017.07-7.07l7 7a5 5 0 01-7.07 7.07z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  );
}

const DRUG_CATEGORIES = [
  { title: "Pain & Relief", count: "Analgesics, Anti-inflammatory" },
  { title: "Cold & Flu", count: "Decongestants, Syrups" },
  { title: "Prescription Medications", count: "Antibiotics, Chronic Care" },
  { title: "Skin & Dermatology", count: "Topical Creams, Ointments" },
  { title: "Vitamins & Supplements", count: "Multivitamins, Minerals" },
  { title: "Women's Health", count: "Maternal Care, Wellness" },
  { title: "Children's Health", count: "Pediatric Syrups, Care" },
  { title: "First Aid & Essentials", count: "Bandages, Antiseptics" },
];

const FAQS = [
  {
    q: "Do I need a prescription to buy drugs from Roses Pharmacy?",
    a: "Some specialized medications require a valid prescription from a licensed medical practitioner, while common over-the-counter pain relievers, vitamins, and first-aid supplies can be purchased directly without one.",
  },
  {
    q: "Are your medicines genuine and MCAZ approved?",
    a: "Yes, 100%. All pharmaceuticals and healthcare products sold at Roses Pharmacy are sourced directly from registered distributors and fully compliant with local health regulations.",
  },
  {
    q: "Do you offer prescription transfers and WhatsApp orders?",
    a: "Absolutely! You can send us a photo of your prescription on WhatsApp at +263 78 003 5227, and our team will prepare your medication for quick pick-up or assistance.",
  },
  {
    q: "Where is Roses Pharmacy located and what are your operating hours?",
    a: "We are located at 2 Gwatidzo Street, Mbare National, Harare. We are open daily from 8:00 AM to 8:00 PM to serve you.",
  },
  {
    q: "Are licensed pharmacists available for consultation on-site?",
    a: "Yes, qualified pharmacists are on duty during all operating hours to provide dosage advice, drug interaction guidance, and routine health checks.",
  },
];

const HEALTH_TIPS = [
  {
    id: 1,
    title: "Identifying Authentic vs. Counterfeit Medications",
    desc: "Crucial tips on checking batch numbers, packaging seals, and verifying MCAZ verification stamps before consumption.",
    tag: "Safety Advice",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Managing Seasonal Flu & Allergies in Harare",
    desc: "Simple home care routines combined with key over-the-counter relief options to protect your family during weather shifts.",
    tag: "Wellness",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "The Importance of Completing Your Antibiotic Dose",
    desc: "Why stopping treatment early creates drug resistance, and how to safely stick to your doctor’s prescribed schedule.",
    tag: "Health Literacy",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero__card">
          <div className="services-hero__content">
            <span className="services-badge">Verified Community Pharmacy</span>
            <h1 className="services-hero__title">
              Your Trusted Pharmacy for Expert Care &amp; Everyday Health
            </h1>
            <p className="services-hero__subtitle">
              From prescription fulfillment to personal health advice, we offer
              safe, reliable, and compassionate care for you and your family in
              Mbare.
            </p>
            <a href="https://wa.me/263780035227" className="services-hero__btn">
              Visit or Contact Us
            </a>
          </div>
          <div className="services-hero__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
              alt="Pharmacist providing expert care"
            />
          </div>
        </div>
      </section>

      <section className="services-quick-care">
        <div className="services-container">
          <h2 className="services-section-title">
            Simple, Reliable Care Made for You
          </h2>

          <div className="services-quick-grid">
            <div className="quick-card">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
                alt="Pharmacist consulting"
              />
              <div className="quick-card__overlay">
                <h3>Speak to a Pharmacist</h3>
                <a href="tel:+263780035227" className="quick-card__link">
                  Get On A Call <ArrowRightIcon />
                </a>
              </div>
            </div>

            <div className="quick-card">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
                alt="Blood pressure check"
              />
              <div className="quick-card__overlay">
                <h3>Health Checks</h3>
                <a
                  href="https://wa.me/263780035227?text=Hi,%20I'd%20like%20to%20book%20a%20health%20check"
                  className="quick-card__link"
                >
                  Book A Check <ArrowRightIcon />
                </a>
              </div>
            </div>

            <div className="quick-card">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
                alt="Medications shelf"
              />
              <div className="quick-card__overlay">
                <h3>Get Your Medication</h3>
                <a
                  href="https://wa.me/263780035227?text=Hi,%20I%20want%20to%20inquire%20about%20medication%20availability"
                  className="quick-card__link"
                >
                  Inquire Stock <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-categories">
        <div className="services-container">
          <h2 className="services-section-title">Explore Drug Categories</h2>

          <div className="categories-grid">
            {DRUG_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="category-card">
                <div className="category-card__icon">
                  <PillIcon />
                </div>
                <div className="category-card__info">
                  <h4 className="category-card__title">{cat.title}</h4>
                  <span className="category-card__count">{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-education">
        <div className="services-container">
          <div className="education-card">
            <div className="education-card__content">
              <h2 className="education-card__title">Health Education</h2>
              <p className="education-card__subtitle">
                <strong>Stay informed. Make better health decisions.</strong>
              </p>
              <p className="education-card__desc">
                Get simple, reliable health advice and prescription guidelines
                straight from our qualified pharmacists—from medication
                management to daily routine wellness.
              </p>
              <a
                href="https://wa.me/263780035227?text=Hi,%20I%20have%20a%20health%20question"
                className="education-card__btn"
              >
                Speak to a Pharmacist
              </a>
            </div>
            <div className="education-card__image">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacist educating patient"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-team-intro">
        <div className="services-container">
          <div className="team-intro-grid">
            <div className="team-intro-image">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Roses Pharmacy staff"
              />
            </div>
            <div className="team-intro-text">
              <span className="services-badge-sub">About Us</span>
              <h2>Delivering Safe Medicines with Professional Care</h2>
              <p>
                Roses Pharmacy is your trusted neighborhood healthcare provider
                centered in Mbare National. Driven by a deep commitment to our
                local community, we go beyond dispensing medications.
              </p>
              <p>
                Our knowledgeable team offers a holistic approach to wellness
                including prescription reviews, BP screenings, maternal health
                care, and lifestyle advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-faq">
        <div className="services-container services-container--narrow">
          <h2 className="services-section-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                >
                  <button
                    className="faq-item__header"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon />
                  </button>
                  {isOpen && (
                    <div className="faq-item__body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-tips">
        <div className="services-container">
          <h2 className="services-section-title">Health Tips &amp; Insights</h2>

          <div className="tips-grid">
            {HEALTH_TIPS.map((tip) => (
              <div key={tip.id} className="tip-card">
                <div className="tip-card__image">
                  <img src={tip.img} alt={tip.title} />
                  <span className="tip-card__tag">{tip.tag}</span>
                </div>
                <div className="tip-card__body">
                  <h3 className="tip-card__title">{tip.title}</h3>
                  <p className="tip-card__desc">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="services-tips__action">
            <a href="https://wa.me/263780035227" className="services-tips__btn">
              See All Tips &amp; Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
