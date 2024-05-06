"use client";

import InfoCard from "@/components/Abautme/InfoCard";
import Experiencia from "@/components/Experiencia/Experiencia";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <InfoCard />
      <Experiencia />
    </>
  );
}
