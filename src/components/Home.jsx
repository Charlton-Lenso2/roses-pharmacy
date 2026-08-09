import React from "react";
import Hero from "../subpages/Hero";
import AboutSection from "../subpages/AboutSection";
import StatsBar from "../subpages/StatsBar";
import ServicesSection from "../subpages/ServicesSection";
import WhyChooseUs from "../subpages/WhyChooseUs";
import PrescriptionCTA from "../subpages/PrescriptionCTA";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUs />
      <PrescriptionCTA />
    </div>
  );
}

export default Home;
