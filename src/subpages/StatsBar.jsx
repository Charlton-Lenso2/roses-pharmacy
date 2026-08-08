import React from "react";
import CountUp from "./CountUp";
import "./StatsBar.css";

const StatsBar = () => {
  const stats = [
    {
      id: 1,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      value: 1000,
      suffix: "+",
      label: "Happy Patients Served",
    },
    {
      id: 2,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      value: 100,
      suffix: "%",
      label: "Genuine Medicines",
    },
    {
      id: 3,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      value: 10,
      suffix: "+",
      label: "Healthcare Services",
    },
    {
      id: 4,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: 12,
      suffix: " Hrs",
      label: "Open Daily (8am - 8pm)",
    },
  ];

  return (
    <section className="stats-bar-section">
      <div className="stats-container">
        {stats.map((item) => (
          <div key={item.id} className="stat-card">
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-info">
              <h3 className="stat-count">
                <CountUp
                  from={0}
                  to={item.value}
                  separator=","
                  direction="up"
                  duration={1.8}
                  className="count-up-text"
                  delay={0.2}
                />
                {item.suffix}
              </h3>
              <p className="stat-label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
