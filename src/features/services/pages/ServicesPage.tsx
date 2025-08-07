import React from "react";
import { SetPageProp } from "@/types";
import ServicesSection from "../components/ServicesSection";

const ServicesPage = ({ setPage }: SetPageProp) => (
  <ServicesSection setPage={setPage} />
);

export default ServicesPage;
