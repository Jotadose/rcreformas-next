import React from "react";
import { Phone, Mail } from "lucide-react";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import Button from "@/components/ui/Button";

const ContactSection = () => (
  <section className="py-16 md:py-24 bg-dark-bg relative">
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
      <div className="max-w-4xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12 bg-medium-bg p-8 rounded-lg shadow-2xl">
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase text-brand-yellow">
            Contacto Directo
          </h3>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 group"
          >
            <Phone
              className="text-brand-yellow group-hover:scale-110 transition-transform"
              size={24}
            />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-main-text group-hover:text-brand-yellow transition-colors">
                +56 9 1234 5678
              </p>
            </div>
          </a>
          <a
            href="mailto:contacto@reformasrc.cl"
            className="flex items-center space-x-4 group"
          >
            <Mail
              className="text-brand-yellow group-hover:scale-110 transition-transform"
              size={24}
            />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-main-text group-hover:text-brand-yellow transition-colors">
                contacto@reformasrc.cl
              </p>
            </div>
          </a>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-main-text/80 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              className="block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-main-text/80 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full bg-light-bg border-transparent rounded-md py-2 px-3 text-main-text focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            ></textarea>
          </div>
          <div>
            <Button type="submit" className="w-full">
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
