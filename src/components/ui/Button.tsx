import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  // Aseguramos que el color del texto sea 'brand-dark'
  const baseClasses =
    "px-6 py-3 font-heading font-bold text-brand-dark bg-brand-yellow rounded-full shadow-md transition-colors duration-300 transform hover:bg-brand-white hover:text-brand-dark";

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
