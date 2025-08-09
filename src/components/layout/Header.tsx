import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SetPageProp, Page } from "@/types";
import Image from "next/image";
import Button from "../ui/Button";

const Header = ({ setPage }: SetPageProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Actualizamos los enlaces de navegación
  const navLinks: { name: string; page: Page }[] = [
    { name: "Inicio", page: Page.Home },
    { name: "Servicios", page: Page.Services }, // <-- NUEVO ENLACE
    { name: "Proyectos", page: Page.Projects },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-blue/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="cursor-pointer"
            onClick={() => handleNavClick(Page.Home)}
          >
            <Image
              src="/images/reformaslogoblanco.jpg"
              alt="Logo de RC Reformas"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className="font-heading font-bold text-brand-white hover:text-brand-yellow transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => setPage(Page.AboutContact)}>Contacto</Button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-white focus:outline-none z-50 relative p-2"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-blue shadow-lg"
          >
            <nav className="flex flex-col items-center p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.page)}
                  className="font-heading font-bold text-brand-white text-lg w-full text-center py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => setPage(Page.AboutContact)}
                className="w-full mt-2"
              >
                Contacto
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
