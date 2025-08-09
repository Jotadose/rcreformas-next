import React, { useEffect } from "react";
import { motion } from "framer-motion";

const InstagramGallery = () => {
  // useEffect para cargar el script de Elfsight de forma segura en Next.js
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiamos el script cuando el componente se desmonta para evitar duplicados
      const elfsightScript = document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]'
      );
      if (elfsightScript) {
        document.body.removeChild(elfsightScript);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-brand-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-brand-blue">
            Nuestra Galería en{" "}
            <span className="text-brand-yellow">Instagram</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-dark/70">
            Explora nuestros últimos trabajos, procesos y el día a día de
            nuestros proyectos.
          </p>
        </motion.div>

        {/* CÓDIGO DEL WIDGET DE INSTAGRAM INTEGRADO */}
        <div
          className="elfsight-app-d74ea7ab-6ef8-4067-aad8-1f4f36e80936"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default InstagramGallery;
