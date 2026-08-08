import React from "react";
import Hero from "../subpages/Hero";
import AboutSection from "../subpages/AboutSection";
import StatsBar from "../subpages/StatsBar";
import ServicesSection from "../subpages/ServicesSection";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsBar />
      <ServicesSection/>
    </div>
  );
}

export default Home;
