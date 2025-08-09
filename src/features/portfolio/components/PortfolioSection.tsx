import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { portfolioData } from "@/data/siteData";

const PortfolioSection = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-blue/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-brand-white">
            Proyectos Realizados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-white/70">
            Calidad y profesionalismo que puedes ver.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <Eye className="text-brand-yellow mb-2" size={32} />
                <h3 className="font-heading text-xl font-bold text-brand-white">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-yellow font-semibold">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
