import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const baseClasses =
    "px-8 py-4 font-bold uppercase rounded-lg shadow-lg transition-all duration-300 transform";

  const variants = {
    primary: "bg-brand-yellow text-dark-bg hover:bg-yellow-400",
    secondary:
      "bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-dark-bg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
