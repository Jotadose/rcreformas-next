import React from "react";
import PortfolioSection from "@/features/portfolio/components/PortfolioSection";
import InstagramFeed from "@/features/instagram/components/InstagramFeed";
import BeforeAfterSlider from "@/features/before-after/components/BeforeAfterSlider"; // <-- 1. Importar
import { beforeAfterData } from "@/data/siteData"; // <-- 1. Importar datos

const ProjectsPage = () => (
  <>
    <PortfolioSection />

    <InstagramFeed />
  </>
);

export default ProjectsPage;
