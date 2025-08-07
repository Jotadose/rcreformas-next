import React, { useState, useEffect } from "react";

// FONT: Importar la fuente Inter desde Google Fonts en el <head> del HTML.
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">

// TAILWIND CONFIG SIMULATION:
// En un proyecto real, estas personalizaciones estarían en `tailwind.config.js`.
// theme: {
//   extend: {
//     colors: {
//       'dark-bg': '#111827',
//       'medium-bg': '#1F2937',
//       'light-bg': '#374151',
//       'brand-yellow': '#FFC107',
//       'main-text': '#F9FAFB',
//     },
//     fontFamily: {
//       sans: ['Inter', 'sans-serif'],
//     },
//   },
// },

// --- Helper Data ---
// Datos de ejemplo para servicios y proyectos.
const servicesData = [
  {
    id: 1,
    title: "Remodelaciones Integrales",
    description:
      "Transformamos espacios completos, desde la planificación hasta los acabados finales.",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Obra Nueva",
    description:
      "Construimos desde cero, garantizando calidad estructural y cumplimiento de plazos.",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "Mantenimiento Comercial",
    description: "Soluciones eficientes para que tu negocio nunca se detenga.",
    icon: "🏢",
  },
  {
    id: 4,
    title: "Diseño de Interiores",
    description:
      "Creamos ambientes funcionales y estéticos que reflejan tu estilo.",
    icon: "🎨",
  },
  {
    id: 5,
    title: "Ampliaciones",
    description:
      "Expandimos tus espacios para adaptarnos a tus nuevas necesidades.",
    icon: "➕",
  },
  {
    id: 6,
    title: "Instalaciones Eléctricas",
    description:
      "Servicios eléctricos seguros y certificados por profesionales.",
    icon: "⚡️",
  },
  {
    id: 7,
    title: "Gasfitería Profesional",
    description:
      "Soluciones de plomería rápidas y duraderas para cualquier problema.",
    icon: "💧",
  },
  {
    id: 8,
    title: "Pintura y Acabados",
    description:
      "Acabados de alta calidad que renuevan y protegen tus superficies.",
    icon: "🖌️",
  },
];

const portfolioData = [
  {
    id: 1,
    title: 'Remodelación Cocina "Familia Torres"',
    category: "Remodelación",
    imageUrl: "https://placehold.co/600x400/1F2937/F9FAFB?text=Cocina+Moderna",
  },
  {
    id: 2,
    title: 'Oficinas "Startup Creativa"',
    category: "Obra Nueva",
    imageUrl: "https://placehold.co/600x400/1F2937/F9FAFB?text=Oficina+Startup",
  },
  {
    id: 3,
    title: 'Fachada Tienda "El Rincón"',
    category: "Mantenimiento",
    imageUrl: "https://placehold.co/600x400/1F2937/F9FAFB?text=Fachada+Tienda",
  },
  {
    id: 4,
    title: 'Ampliación Living "Casa Fernández"',
    category: "Remodelación",
    imageUrl: "https://placehold.co/600x400/1F2937/F9FAFB?text=Living+Ampliado",
  },
  {
    id: 5,
    title: 'Construcción Quincho "Los Aromos"',
    category: "Obra Nueva",
    imageUrl: "https://placehold.co/600x400/1F2937/F9FAFB?text=Quincho",
  },
  {
    id: 6,
    title: "Renovación Baño Principal",
    category: "Remodelación",
    imageUrl: "https://placehold.co/600x400/1F2937/F9FAFB?text=Baño+Renovado",
  },
];

// --- Support Components ---

const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="20"
            cy="20"
            r="1"
            fill="#374151"
          ></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
  </div>
);

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-brand-yellow text-dark-bg shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Volver arriba"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

// --- Main Layout Components ---

const Header = ({ setPage }) => {
  const navLinks = [
    { name: "Inicio", page: "home" },
    { name: "Servicios", page: "services" },
    { name: "Proyectos", page: "portfolio" },
    { name: "Contacto", page: "contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-dark-bg/70 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="text-2xl font-black uppercase cursor-pointer"
            onClick={() => setPage("home")}
          >
            Reformas <span className="text-brand-yellow">RC</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setPage(link.page)}
                className="font-semibold text-main-text/80 hover:text-brand-yellow transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>
          {/* Mobile Menu Button (optional) */}
          <div className="md:hidden">
            <button className="text-main-text focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-medium-bg border-t border-light-bg/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-main-text/60">
      <p>
        &copy; {new Date().getFullYear()} Reformas RC - Construcciones &
        Mantenimiento. Todos los derechos reservados.
      </p>
      <p className="text-sm mt-2">
        Diseñado para generar confianza en la Región de Coquimbo.
      </p>
    </div>
  </footer>
);

// --- Page-specific Components ---

const Hero = ({ setPage }) => (
  <section className="relative py-20 md:py-32 bg-medium-bg">
    <BackgroundPattern />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-black uppercase text-main-text">
        Construimos y Renovamos <br />
        <span className="text-brand-yellow">tus Sueños</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-main-text/80">
        Fiabilidad, calidad y un socio de confianza para la remodelación de tu
        hogar o negocio. Posicionamos la calidad y la transparencia como pilares
        de cada proyecto.
      </p>
      <button
        onClick={() => setPage("contact")}
        className="mt-10 px-8 py-4 bg-brand-yellow text-dark-bg font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
      >
        Cotiza tu Proyecto
      </button>
    </div>
  </section>
);

const Services = ({ summary = false, setPage }) => {
  const servicesToShow = summary ? servicesData.slice(0, 4) : servicesData;

  return (
    <section className="py-16 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-main-text">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-main-text/70">
            Soluciones integrales para cada una de tus necesidades
            constructivas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesToShow.map((service) => (
            <div
              key={service.id}
              className="bg-medium-bg rounded-lg p-8 text-center border border-transparent hover:border-brand-yellow transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold uppercase text-main-text mb-2">
                {service.title}
              </h3>
              <p className="text-main-text/70">{service.description}</p>
            </div>
          ))}
        </div>
        {summary && (
          <div className="text-center mt-12">
            <button
              onClick={() => setPage("services")}
              className="font-semibold text-brand-yellow hover:text-yellow-400 transition-colors"
            >
              Ver todos los servicios &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const filters = ["Todos", "Remodelación", "Obra Nueva", "Mantenimiento"];

  const filteredProjects =
    filter === "Todos"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <section className="py-16 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-main-text">
            Proyectos Realizados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-main-text/70">
            Calidad y profesionalismo que puedes ver.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                filter === f
                  ? "bg-brand-yellow text-dark-bg"
                  : "bg-medium-bg text-main-text hover:bg-light-bg"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-medium-bg rounded-lg overflow-hidden shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-yellow font-semibold">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-main-text mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-16 md:py-24 bg-dark-bg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://placehold.co/600x700/1F2937/F9FAFB?text=Equipo+RC"
            alt="Equipo de Reformas RC"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-main-text">
            Humanizando la Construcción
          </h2>
          <p className="mt-4 text-lg text-main-text/70">
            En "Reformas RC", somos más que una empresa constructora; somos un
            equipo de profesionales apasionados dedicados a materializar tus
            ideas con la máxima calidad y transparencia.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold uppercase text-brand-yellow">
                Misión
              </h3>
              <p className="mt-2 text-main-text/80">
                Combatir el déficit de confianza en el sector, entregando
                proyectos a tiempo, dentro del presupuesto y superando las
                expectativas de calidad a través de una comunicación honesta y
                constante.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase text-brand-yellow">
                Valores
              </h3>
              <ul className="mt-2 list-disc list-inside text-main-text/80 space-y-1">
                <li>
                  <strong>Calidad:</strong> Materiales de primera y mano de obra
                  experta.
                </li>
                <li>
                  <strong>Transparencia:</strong> Presupuestos claros y
                  comunicación abierta.
                </li>
                <li>
                  <strong>Puntualidad:</strong> Respeto absoluto por los plazos
                  acordados.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-16 md:py-24 bg-medium-bg relative">
    <BackgroundPattern />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-main-text">
          Hablemos de tu Proyecto
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-main-text/70">
          Completa el formulario o contáctanos directamente. Estamos listos para
          asesorarte.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold uppercase text-brand-yellow">
              Contacto Directo
            </h3>
            <p className="mt-2 text-main-text/80">
              Para una respuesta más rápida.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-brand-yellow text-2xl">📱</div>
            <div>
              <p className="font-semibold">WhatsApp</p>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main-text hover:text-brand-yellow"
              >
                +56 9 1234 5678
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-brand-yellow text-2xl">✉️</div>
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:contacto@reformasrc.cl"
                className="text-main-text hover:text-brand-yellow"
              >
                contacto@reformasrc.cl
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-main-text/80"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-main-text/80"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-main-text/80"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-brand-yellow text-dark-bg font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

// --- Page Components (for routing) ---

const HomePage = ({ setPage }) => (
  <>
    <Hero setPage={setPage} />
    <Services summary={true} setPage={setPage} />
    <About />
    <Contact />
  </>
);

const ServicesPage = ({ setPage }) => <Services setPage={setPage} />;
const PortfolioPage = () => <Portfolio />;
const AboutPage = () => <About />;
const ContactPage = () => <Contact />;

// --- Main App Component (Router) ---

export default function App() {
  const [page, setPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage setPage={setPage} />;
      case "services":
        return <ServicesPage setPage={setPage} />;
      case "portfolio":
        return <PortfolioPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-dark-bg text-main-text font-sans antialiased">
      <Header setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
