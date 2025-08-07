import { Dispatch, SetStateAction } from "react";

// Usamos un Enum para evitar strings "mágicos" y tener autocompletado.
export enum Page {
  Home = "home",
  Services = "services",
  Portfolio = "portfolio",
  About = "about",
  Contact = "contact",
}

export type SetPageProp = {
  setPage: Dispatch<SetStateAction<Page>>;
};
