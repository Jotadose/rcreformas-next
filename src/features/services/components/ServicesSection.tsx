import React from "react";
import { servicesData } from "@/data/siteData";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-brand-white">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">
            Soluciones integrales para cada una de tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:border-brand-yellow transition-all duration-300"
            >
              <div className="text-5xl mb-5 text-brand-yellow">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-brand-white mb-3">
                {service.title}
              </h3>
              <p className="text-base text-brand-white/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
