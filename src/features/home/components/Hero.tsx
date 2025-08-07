import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SetPageProp, Page } from "@/types";
import Button from "@/components/ui/Button";

const Hero = ({ setPage }: SetPageProp) => (
  <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden bg-dark-bg">
    {/* Contenedor de la Imagen de Fondo Animada */}
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <Image
        src="/images/refor1.jpg" // Usamos una de tus imágenes de alta calidad
        alt="Fondo de construcción"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        priority
      />
    </motion.div>

    {/* Contenido del Hero */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-main-text"
      >
        Construimos y Renovamos <br className="hidden sm:block" />
        <span className="text-brand-yellow">tus Sueños</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-main-text/80"
      >
        Fiabilidad, calidad y un socio de confianza para la remodelación de tu
        hogar o negocio.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-10"
      >
        <Button onClick={() => setPage(Page.Contact)}>
          Cotiza tu Proyecto
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
