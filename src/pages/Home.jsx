import React from "react";
import Project from "../component/Project";
import ServicesSection from "../component/ServicesSection";
import ReasonsSection from "../component/ReasonsSection";
import WorksSection from "../component/WorksSection";
import TestimonialsSection from "../component/TestimonialsSection";
import FAQSection from "../component/FAQSection";
import FooterSection from "../component/FooterSection";
import Readycta from "../component/Readycta";

const Home = () => {
  return (
    <>
      <Project />
      <ReasonsSection />
      <ServicesSection />
      <WorksSection />
      <TestimonialsSection />
      <FAQSection />
      <Readycta />
      <FooterSection />
    </>
  );
};

export default Home;
