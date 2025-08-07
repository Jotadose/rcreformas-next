import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/siteData";
import Card from "@/components/ui/Card";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("Todos");
  const filters = [
    "Todos",
    ...Array.from(new Set(portfolioData.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "Todos"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <section className="py-16 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-main-text">
            Proyectos Realizados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-main-text/70">
            Calidad y profesionalismo que puedes ver.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                filter === f
                  ? "bg-brand-yellow text-dark-bg"
                  : "bg-medium-bg text-main-text hover:bg-light-bg"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group">
              <div className="overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-yellow font-semibold">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-main-text mt-1">
                  {project.title}
                </h3>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
