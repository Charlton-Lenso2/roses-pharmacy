import React, { useState } from "react";
import "./Contact.css";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    recordNumber: "",
    reason: "Prescription Refill",
    department: "Pharmacy Care",
    preferredDate: "",
    preferredTime: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `Hi Roses Pharmacy,%0A%0A*New Inquiry / Appointment Request*%0A- *Name:* ${formData.name}%0A- *Phone:* ${formData.phone}%0A- *Record No:* ${formData.recordNumber || "N/A"}%0A- *Reason:* ${formData.reason}%0A- *Department:* ${formData.department}%0A- *Date:* ${formData.preferredDate}%0A- *Time:* ${formData.preferredTime}`;
    window.open(`https://wa.me/263780035227?text=${whatsappMsg}`, "_blank");
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${newsletterEmail}! You will now receive health tips & updates.`,
    );
    setNewsletterEmail("");
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__container">
          <div className="contact-hero__image-col">
            <div className="contact-hero__img-card">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacist on duty"
              />
              <div className="contact-hero__badge">
                <span className="badge-dot"></span>
                <span>Licensed Pharmacists Available</span>
              </div>
            </div>
          </div>

          <div className="contact-hero__text-col">
            <h1 className="contact-hero__title">
              Don't Let Your Health Take a Backseat!
            </h1>
            <p className="contact-hero__subtitle">
              Fill out the form below to schedule a consultation or inquire
              about prescription availability with our healthcare professionals
              in Mbare.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main__container">
          {/* Form Column */}
          <div className="contact-form-col">
            <h2 className="contact-section-title">Inquiry / Appointment</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. David John"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+263 78 003 5227"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="recordNumber">
                  Patient / Card Number (Optional)
                </label>
                <input
                  type="text"
                  id="recordNumber"
                  name="recordNumber"
                  placeholder="123456-7890-0987"
                  value={formData.recordNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reason">Reason for Visit</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                  >
                    <option value="Prescription Refill">
                      Prescription Refill
                    </option>
                    <option value="General Health Consultation">
                      General Health Consultation
                    </option>
                    <option value="BP / Blood Sugar Check">
                      BP / Blood Sugar Check
                    </option>
                    <option value="Medication Inquiry">
                      Medication Availability
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="Pharmacy Care">Pharmacy Care</option>
                    <option value="Primary Healthcare">
                      Primary Healthcare
                    </option>
                    <option value="Over The Counter">Over The Counter</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group icon-input-group">
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <div className="input-with-icon">
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                    />
                    <CalendarIcon />
                  </div>
                </div>
                <div className="form-group icon-input-group">
                  <label htmlFor="preferredTime">Preferred Time</label>
                  <div className="input-with-icon">
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                    />
                    <ClockIcon />
                  </div>
                </div>
              </div>

              <button type="submit" className="contact-submit-btn">
                Submit Message <ArrowRightIcon />
              </button>
            </form>
          </div>

          <div className="contact-info-col">
            <h2 className="contact-section-title">Contact Info</h2>

            <div className="contact-info__card">
              <div className="contact-info__image">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                  alt="Roses Pharmacy staff member"
                />
              </div>

              <div className="contact-info__list">
                <div className="info-item">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+263780035227">+263 78 003 5227</a>
                  </p>
                </div>

                <div className="info-item">
                  <h4>WhatsApp / Support</h4>
                  <p>
                    <a
                      href="https://wa.me/263780035227"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +263 78 003 5227
                    </a>
                  </p>
                </div>

                <div className="info-item">
                  <h4>Our Location</h4>
                  <p>2 Gwatidzo Street, Mbare National, Harare, Zimbabwe</p>
                </div>

                <div className="info-item">
                  <h4>Operating Hours</h4>
                  <p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-newsletter">
        <div className="contact-newsletter__container">
          <div className="contact-newsletter__card">
            <div className="newsletter-text">
              <h2>Be Our Subscriber</h2>
              <p>
                Get the latest news, medication updates, and health tips from
                our local experts.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="example@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">
                Submit <ArrowRightIcon />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
