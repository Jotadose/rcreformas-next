import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { testimonialsData } from "@/data/siteData";

const TestimonialsSection = () => {
  return (
    // Usamos el nuevo color de fondo gris claro
    <section className="py-20 md:py-28 bg-brand-blue/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-brand-white">
            Lo que dicen{" "}
            <span className="text-brand-yellow">Nuestros Clientes</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // La tarjeta sigue siendo blanca, pero ahora contrasta con el fondo de la sección
              className="bg-brand-white/90 p-8 rounded-lg shadow-md flex flex-col"
            >
              <MessageSquare className="text-brand-yellow/50 mb-4" size={32} />
              <p className="text-brand-dark/80 italic flex-grow">
                &quot;{testimonial.comment}&quot;
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center">
                <Image
                  src={testimonial.avatarUrl}
                  alt={`Avatar de ${testimonial.name}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-heading font-bold text-brand-yellow">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
