import React from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";

const AboutSection = () => (
  <section className="py-16 md:py-24 bg-medium-bg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="p-0 overflow-visible">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full -mt-8 md:-mt-12 md:ml-8">
            <Image
              src="/images/reformasafiche.jpg" // Nueva imagen de alta calidad
              alt="Profesional de Reformas RC planificando un proyecto"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-main-text">
              Humanizando la Construcción
            </h2>
            <p className="mt-4 text-lg text-main-text/70">
              En &quot;Reformas RC&quot;, somos más que una empresa
              constructora; somos un equipo de profesionales apasionados
              dedicados a materializar tus ideas.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold uppercase text-brand-yellow">
                  Misión
                </h3>
                <p className="mt-2 text-main-text/80">
                  Combatir el déficit de confianza en el sector, entregando
                  proyectos a tiempo, dentro del presupuesto y superando las
                  expectativas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-brand-yellow">
                  Valores
                </h3>
                <ul className="mt-2 list-disc list-inside text-main-text/80 space-y-1">
                  <li>
                    <strong>Calidad:</strong> Materiales de primera y mano de
                    obra experta.
                  </li>
                  <li>
                    <strong>Transparencia:</strong> Presupuestos claros y
                    comunicación abierta.
                  </li>
                  <li>
                    <strong>Puntualidad:</strong> Respeto absoluto por los
                    plazos acordados.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default AboutSection;
