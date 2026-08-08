import React from "react";
import Hero from "../subpages/Hero";
import AboutSection from "../subpages/AboutSection";
import StatsBar from "../subpages/StatsBar";

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsBar />
    </div>
  );
}

export default Home;
