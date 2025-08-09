import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FloatingWhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/56987593649" // Cambia este número
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Phone size={28} color="white" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;
