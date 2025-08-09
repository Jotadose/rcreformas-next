import React, { useState, useEffect, Suspense } from "react";
import { Page } from "@/types";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/layout/BackToTopButton";
import FloatingWhatsAppButton from "./layout/FloatingWhatsAppButton";

// Pages
const HomePage = React.lazy(() => import("@/features/home/pages/HomePage"));
const ServicesPage = React.lazy(
  () => import("@/features/services/pages/ServicesPage")
); // <-- 1. Importar
const ProjectsPage = React.lazy(
  () => import("@/features/projects/pages/ProjectsPage")
);
const AboutContactPage = React.lazy(
  () => import("@/features/about/pages/AboutContactPage")
);

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-brand-dark">
    <div className="font-heading text-brand-yellow text-xl animate-pulse">
      Cargando...
    </div>
  </div>
);

export default function ReformasRCWebApp() {
  const [page, setPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case Page.Home:
        return <HomePage setPage={setPage} />;
      case Page.Services:
        return <ServicesPage />; // <-- 2. Añadir caso
      case Page.Projects:
        return <ProjectsPage />;
      case Page.AboutContact:
        return <AboutContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <>
      <Header setPage={setPage} />
      <main>
        <Suspense fallback={<LoadingFallback />}>{renderPage()}</Suspense>
      </main>
      <Footer />
      <BackToTopButton />
      <FloatingWhatsAppButton />
    </>
  );
}
