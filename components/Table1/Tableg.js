import React from "react";
import { Tableone } from "./Tableone";

export function Tableg() {
  return (
    <div className="flex justify-center items-center h-full py-20 ">
      <div className="w-4/5">
        <div className="flex justify-center items-center">
          <div className="w-[50%]">
            <Tableone />
          </div>
          <div className="w-[30%]">
            <h2 className="text-3xl px-5">
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
