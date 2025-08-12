import React from "react";
// Importamos HTMLMotionProps para una mejor integración de tipos
import { motion, HTMLMotionProps } from "framer-motion";

// Extendemos de HTMLMotionProps en lugar de los atributos de botón estándar
interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 font-heading font-bold text-brand-dark bg-brand-yellow rounded-full shadow-md transition-colors duration-300 transform hover:bg-brand-green hover:text-brand-light-gray focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-50";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
