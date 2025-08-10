import React from "react";
import { motion } from "framer-motion";
import { SetPageProp, Page } from "@/types";
import Button from "@/components/ui/Button";
import Image from "next/image";

const Hero = ({ setPage }: SetPageProp) => (
  <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden py-20">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/refor13.jpg" // Puedes cambiar esta ruta por la imagen que prefieras
        alt="Fondo de proyecto de construcción"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-brand-black/20"></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold uppercase text-brand-yellow leading-tight"
      >
        Calidad y Confianza <br /> en Cada Detalle
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-brand-white/80"
      >
        Expertos en reformas y mantenciones. Transformamos tus espacios con
        profesionalismo y los mejores materiales.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-12"
      >
        <Button onClick={() => setPage(Page.AboutContact)}>
          Cotiza tu Proyecto
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
