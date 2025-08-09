import React from "react";
import SocialLinks from "./SocialLinks"; // La importación debe ser así

const Footer = () => (
  <footer className="bg-medium-bg border-t border-light-bg/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
      <div className="mb-8">
        <SocialLinks />
      </div>
      <div className="text-main-text/60">
        <p>
          &copy; {new Date().getFullYear()} Reformas RC - Construcciones &
          Mantenimiento.
        </p>
        <p className="text-sm mt-2">
          Todos los derechos reservados. Coquimbo, Chile.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
