import React from "react";
import { servicesData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Page } from "@/types";
import Button from "@/components/ui/Button";

interface ServicesSectionProps {
  summary?: boolean;
  setPage?: (page: Page) => void;
}

const ServicesSection = ({
  summary = false,
  setPage,
}: ServicesSectionProps) => {
  const servicesToShow = summary ? servicesData.slice(0, 3) : servicesData;

  return (
    <section className="py-20 md:py-28 bg-brand-light-gray text-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-brand-blue">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-dark/70">
            Soluciones integrales para cada una de tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToShow.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-white p-8 rounded-lg border-2 border-transparent hover:border-brand-yellow hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-5 text-brand-yellow">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand-blue mb-3">
                {service.title}
              </h3>
              <p className="text-base text-brand-dark/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        {summary && setPage && (
          <div className="text-center mt-16">
            <Button onClick={() => setPage(Page.Services)}>
              Ver Todos los Servicios
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
