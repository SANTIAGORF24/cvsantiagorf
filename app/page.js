"use client";

import { Nav } from "@/components/Nav/Nav";
import { Banner } from "@/components/Banner/Banner";
import { Liquido } from "@/components/Liquido/Liquido";
import { Tableg } from "@/components/Table1/Tableg";
import { Tables } from "@/components/Table1/Tables";
import TemperatureGraph from "@/components/Grafica/TemperatureGraph";
import { Ecuaciones } from "@/components/Ecuaciones/Ecuaciones";
import { Resultados } from "@/components/Resultados/Resultados";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Liquido />
      <Tableg />
      <Tables />
      <TemperatureGraph />
      <Ecuaciones />
      <Resultados />
    </>
  );
}
