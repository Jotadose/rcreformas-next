import React from "react";
import { SetPageProp } from "@/types";
import Hero from "../components/Hero";
import ServicesSection from "@/features/services/components/ServicesSection";
import AboutSection from "@/features/about/components/AboutSection";
import ContactSection from "@/features/contact/components/ContactSection";
import PortfolioSection from "@/features/portfolio/components/PortfolioSection";

const HomePage = ({ setPage }: SetPageProp) => (
  <>
    <Hero setPage={setPage} />
    <ServicesSection summary={true} setPage={setPage} />
    <AboutSection />
    <PortfolioSection />
    <ContactSection />
  </>
);

export default HomePage;
