import React from "react";
import { Tableone } from "./Tableone";

export function Tableg() {
  return (
    <div className="flex justify-center items-center flex-col h-full py-20 ">
      <h1 className="text-4xl mb-8 font-bold text-orange-500">
        PROBLEMA DE ENFRIAMIENTO
      </h1>
      <div className="w-4/6 text-center mb-8">
        <p className="text-lg">
          En una expedición arqueológica, un equipo descubre un antiguo
          relicario metálico. La temperatura del relicario al ser encontrado es
          de <span className="font-bold text-orange-500">45.9°C</span>, pero al
          sacarlo a la superficie, donde la temperatura ambiente es de{" "}
          <span className="font-bold text-orange-500">20.3°C</span>, comienza un
          proceso de enfriamiento. Después de{" "}
          <span className="font-bold text-orange-500">30 minutos</span> de haber
          sido expuesto al aire fresco, la temperatura del relicario ha
          descendido a <span className="font-bold text-orange-500">36.1°C</span>
          . Suponiendo que el relicario tiene propiedades de enfriamiento
          similares a las de un objeto metálico, podemos modelar su enfriamiento
          utilizando la ley de enfriamiento de Newton.
        </p>
      </div>
      <div className="w-4/5">
        <div className="flex justify-center items-center">
          <div className="w-[50%]">
            <Tableone />
          </div>
          <div className="w-[30%]">
            <h2 className="text-2xl px-5">
              Aquí se puede presenciar las 21 muestras de datos que tomamos
              dentro del tiempo estipulado de 100 minutos, donde la temperatura
              va disminuyendo a medida que el tiempo va pasando, del análisis de
              estos datos se crea una gráfica para luego realizar una ecuación
              diferencial que nos apoye a encontrar la constante k en nuestro
              ejercicio{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
