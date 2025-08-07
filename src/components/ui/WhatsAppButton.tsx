import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/56912345678" // Cambia este número
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-start w-[45px] h-[45px] bg-[#25D366] rounded-full cursor-pointer shadow-lg"
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        hover: {
          width: "160px",
          borderRadius: "40px",
        },
      }}
    >
      <motion.div
        className="flex items-center justify-center w-[45px] h-[45px]"
        variants={{ hover: { width: "30%", paddingLeft: "10px" } }}
        transition={{ duration: 0.3 }}
      >
        <Phone size={25} color="white" />
      </motion.div>
      <motion.div
        className="text-white font-semibold text-base overflow-hidden whitespace-nowrap"
        initial={{ opacity: 0, width: 0 }}
        variants={{
          hover: {
            opacity: 1,
            width: "70%",
            paddingRight: "10px",
          },
        }}
        transition={{ duration: 0.3 }}
      >
        WhatsApp
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
