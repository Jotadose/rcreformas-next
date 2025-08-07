import React, { useState, useEffect, Suspense } from "react";
import { Page } from "@/types";

// Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/layout/BackToTopButton";

// Pages (lazy loaded for performance)
// CORRECCIÓN: Se envuelve la importación en una función para que React.lazy funcione correctamente
const HomePage = React.lazy(() => import("@/features/home/pages/HomePage"));
const ServicesPage = React.lazy(
  () => import("@/features/services/pages/ServicesPage")
);
const PortfolioPage = React.lazy(
  () => import("@/features/portfolio/pages/PortfolioPage")
);
const AboutPage = React.lazy(() => import("@/features/about/pages/AboutPage"));
const ContactPage = React.lazy(
  () => import("@/features/contact/pages/ContactPage")
);

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-dark-bg">
    <div className="text-brand-yellow text-xl animate-pulse">Cargando...</div>
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
        return <ServicesPage setPage={setPage} />;
      case Page.Portfolio:
        return <PortfolioPage />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-dark-bg text-main-text font-sans antialiased">
      <Header setPage={setPage} />
      <main>
        <Suspense fallback={<LoadingFallback />}>{renderPage()}</Suspense>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
