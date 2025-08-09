import React from "react";
import { SetPageProp, Page } from "@/types";
import Hero from "../components/Hero";
import ServicesSection from "@/features/services/components/ServicesSection";
import TestimonialsSection from "@/features/testimonials/components/TestimonialsSection";
import Button from "@/components/ui/Button";

const HomePage = ({ setPage }: SetPageProp) => (
  <>
    <Hero setPage={setPage} />
    {/* Ahora la sección de servicios en la Home tiene un botón para ver más */}
    <ServicesSection summary={true} setPage={setPage} />
    <TestimonialsSection />
    <div className="text-center py-16 bg-brand-dark">
      <Button onClick={() => setPage(Page.Projects)}>
        Ver Nuestros Proyectos
      </Button>
    </div>
  </>
);

export default HomePage;
