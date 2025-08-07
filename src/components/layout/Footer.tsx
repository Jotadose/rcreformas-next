import React from "react";

const Footer = () => (
  <footer className="bg-medium-bg border-t border-light-bg/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-main-text/60">
      <p>
        &copy; {new Date().getFullYear()} Reformas RC - Construcciones &
        Mantenimiento.
      </p>
      <p className="text-sm mt-2">Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
