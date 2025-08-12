import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { testimonialsData } from "@/data/siteData";

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold uppercase text-brand-white">
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
              className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:border-brand-yellow transition-all duration-300 flex flex-col"
            >
              <MessageSquare className="text-brand-yellow/50 mb-4" size={32} />
              <p className="text-brand-white/80 italic flex-grow">
                &quot;{testimonial.comment}&quot;
              </p>
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center">
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
