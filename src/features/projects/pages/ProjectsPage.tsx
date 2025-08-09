import React from "react";
import PortfolioSection from "@/features/portfolio/components/PortfolioSection";
import InstagramFeed from "@/features/instagram/components/InstagramFeed";
import BeforeAfterSlider from "@/features/before-after/components/BeforeAfterSlider"; // <-- 1. Importar
import { beforeAfterData } from "@/data/siteData"; // <-- 1. Importar datos

const ProjectsPage = () => (
  <>
    <PortfolioSection />

    {/* {/* --- 2. AÑADIR LA NUEVA SECCIÓN --- *}
    <section className="py-20 md:py-28 bg-brand-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-brand-blue">
                    Transformaciones <span className="text-brand-yellow">Reales</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-dark/70">
                    Arrastra el control para ver el impacto de nuestro trabajo.
                </p>
            </div>
            {beforeAfterData.map(item => (
                <div key={item.id} className="mb-12">
                    <h3 className="font-heading text-2xl font-bold text-brand-blue text-center mb-4">{item.title}</h3>
                    <BeforeAfterSlider beforeImage={item.beforeUrl} afterImage={item.afterUrl} />
                </div>
            ))}
        </div>
    </section> */}

    <InstagramFeed />
  </>
);

export default ProjectsPage;
