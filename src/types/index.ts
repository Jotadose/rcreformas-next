import { Dispatch, SetStateAction } from "react";

// Añadimos la nueva página de Servicios
export enum Page {
  Home = "home",
  Services = "services", // <-- NUEVA PÁGINA
  Projects = "projects",
  AboutContact = "about-contact",
}

export type SetPageProp = {
  setPage: Dispatch<SetStateAction<Page>>;
};
