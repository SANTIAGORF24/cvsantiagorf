import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { Modalecua } from "./Modalecu";
import { Infobot } from "./Infobot";
import { Ecuabut } from "./Ecuabut";

const Ecuaciones = () => {
  return (
    <div className="w-4/6 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">ECUACIÓN</h2>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">ECUACIÓN DIFERENCIAL</h2>
          <ol className="list-none p-0">
            <li className="mb-4">
              <strong>Ley de enfriamiento:</strong>
              <BlockMath math=" \frac{dT}{dt} = k(T - T_m) " />
              <p>
                Donde:
                <BlockMath math="T_m = 20.3" />
              </p>
              <p>
                La solución a esta ecuación diferencial es:
                <BlockMath math=" T - 20.3 = ce^{kt} " />
                <BlockMath math=" T(t) = ce^{kt} + 20.3 " />
              </p>
            </li>
            <li className="mb-4">
              <strong>Condición Inicial:</strong>
              <BlockMath math=" 45.0 = ce^{k \cdot 0} + 20.3 " />
              <p>
                Resolviendo para c, obtenemos:
                <BlockMath math=" c = 25.6 " />
              </p>
              <p>
                Por lo tanto, la solución es:
                <BlockMath math=" T(t) = 25.6e^{-0.032t} + 20.3 " />
              </p>
              <Modalecua />
              <Infobot />
              <Ecuabut />
            </li>
            <li>
              <strong>Hallar K:</strong>
              <BlockMath math=" 36.1 = 25.6e^{k \cdot 15} + 20.3 " />
              <p>
                Para encontrar k, despejamos y aplicamos logaritmos naturales:
                <BlockMath math=" \frac{\ln|\frac{15.8}{25.6}|}{15} = k " />
                <BlockMath math=" k = -0.032 " />
              </p>
            </li>
          </ol>
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-4">ANÁLISIS DE LA ECUACIÓN</h2>
            <p className="text-2xl">
              La constante k, derivada de la ecuación diferencial, es esencial
              para entender la relación dinámica entre la temperatura de la
              gelatina líquida y el tiempo. Al ser negativa, indica una
              disminución constante en la temperatura a medida que el tiempo
              avanza. Este fenómeno puede interpretarse como una característica
              del proceso de enfriamiento de la gelatina líquida debido al
              contacto con el ambiente, donde la sustancia tiende a equilibrarse
              térmicamente con su entorno a una velocidad decreciente.
            </p>
            <p className="text-2xl">
              La magnitud de k, en este caso, -0.032, ofrece información
              adicional. Una constante k más grande implicaría una tasa de
              enfriamiento más rápida, mientras que un valor más pequeño
              indicaría un enfriamiento más lento. En este contexto, el valor
              negativo sugiere que la gelatina líquida tiende a enfriarse con el
              tiempo, lo cual se evidencia con las observaciones experimentales
              de la disminución progresiva de la temperatura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Ecuaciones };
