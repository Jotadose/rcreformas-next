import React from "react";
import { Phone, Facebook, Instagram } from "lucide-react";

const socialLinksData = [
  {
    name: "Whatsapp",
    icon: Phone,
    href: "https://wa.me/56987593649", // Cambia este número
    color: "bg-[#128c7e]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/", // Cambia por tu URL
    color: "bg-[#3b5998]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/rcconstruccionesymantenimiento", // Cambia por tu URL
    color: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex justify-center items-center space-x-4">
      {socialLinksData.map((link) => (
        <li key={link.name} className="relative group">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div
              className={`absolute top-auto bottom-0 left-0 w-full h-0 group-hover:h-full transition-all duration-300 ease-in-out ${link.color}`}
            />
            <link.icon className="relative z-10 w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </a>
          <div
            className={`absolute top-[-50px] left-1/2 -translate-x-1/2 px-3 py-1.5 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[-60px] transition-all duration-300 ease-in-out whitespace-nowrap ${link.color}`}
          >
            {link.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
