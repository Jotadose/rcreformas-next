import React from "react";
import { motion } from "framer-motion";
import { SetPageProp, Page } from "@/types";
import Button from "@/components/ui/Button";

const Hero = ({ setPage }: SetPageProp) => (
  <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden py-16 md:py-20 bg-transparent">
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-heading text-[clamp(2rem,5vw,3.5rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-bold uppercase text-brand-yellow leading-tight"
      >
        Calidad y Confianza <br /> en Cada Detalle
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl mx-auto text-[clamp(1rem,1.5vw,1.25rem)] text-brand-white/80"
      >
        Expertos en reformas y mantenciones. Transformamos tus espacios con
        profesionalismo y los mejores materiales.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-10"
      >
        <Button onClick={() => setPage(Page.AboutContact)}>
          Cotiza tu Proyecto
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
