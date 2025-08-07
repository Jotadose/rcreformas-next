import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton"; // Importamos el nuevo botón

const ContactSection = () => (
  <section className="relative py-20 md:py-32 overflow-hidden">
    {/* Imagen de fondo con superposición oscura */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/refor22.jpg" // Usamos una de tus imágenes
        alt="Fondo de contacto"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="absolute inset-0 bg-dark-bg/80"></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-main-text">
          ¿Listo para <span className="text-brand-yellow">Comenzar</span>?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-main-text/70">
          Contáctanos. Estamos aquí para convertir tu visión en una realidad
          tangible y de alta calidad.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Columna de Información y CTA */}
        <div className="space-y-8 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-main-text">
            Habla directamente con un experto
          </h3>
          <p className="text-main-text/70">
            Para una respuesta inmediata y una asesoría personalizada, usa
            nuestro canal de WhatsApp. Es la forma más rápida de empezar.
          </p>
          <div className="flex justify-center lg:justify-start pt-4">
            <WhatsAppButton />
          </div>
          <div className="pt-4 border-t border-light-bg/20">
            <h4 className="font-semibold text-main-text">
              O si prefieres, escríbenos:
            </h4>
            <a
              href="mailto:contacto@reformasrc.cl"
              className="flex items-center justify-center lg:justify-start space-x-2 mt-2 text-brand-yellow hover:text-yellow-400 transition-colors"
            >
              <Mail size={20} />
              <span>contacto@reformasrc.cl</span>
            </a>
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className="bg-medium-bg p-8 rounded-lg shadow-2xl">
          <form className="space-y-6">
            <h3 className="text-xl font-bold text-main-text">
              Déjanos tus datos
            </h3>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-main-text/80 mb-1"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-main-text/80 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-main-text/80 mb-1"
              >
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              ></textarea>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Enviar Solicitud
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
