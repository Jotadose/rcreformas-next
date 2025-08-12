import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "RC Reformas y Mantenciones",
  description:
    "Especialistas en renovación y mejora de fachadas en la Región de Coquimbo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${roboto.variable} font-sans text-brand-white`}
      >
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/images/refor13.jpg"
            alt="Fondo de textura de construcción"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
