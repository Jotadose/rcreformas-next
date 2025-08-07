import React from "react";
import { servicesData } from "@/data/siteData";
import { Page } from "@/types";
import Card from "@/components/ui/Card";
import * as Icons from "lucide-react";

const Icon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  const LucideIcon = Icons[name as keyof typeof Icons];
  if (!LucideIcon) return <Icons.HelpCircle {...props} />;
  return <LucideIcon {...props} />;
};

interface ServicesSectionProps {
  summary?: boolean;
  setPage?: (page: Page) => void;
}

const ServicesSection = ({
  summary = false,
  setPage,
}: ServicesSectionProps) => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesToShow.map((service) => (
            <Card
              key={service.id}
              className="text-center p-6 sm:p-8 border border-transparent hover:border-brand-yellow transition-colors duration-300"
            >
              <Icon
                name={service.icon}
                className="mx-auto text-brand-yellow mb-4"
                size={40}
              />
              <h3 className="text-lg sm:text-xl font-bold uppercase text-main-text mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-main-text/70">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        {summary && setPage && (
          <div className="text-center mt-12">
            <button
              onClick={() => setPage(Page.Services)}
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

export default ServicesSection;
