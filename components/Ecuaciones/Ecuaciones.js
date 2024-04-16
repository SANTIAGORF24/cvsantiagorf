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
        <h2 className="text-4xl font-bold mb-4">ECUACI&Oacute;N</h2>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            ECUACI&Oacute;N DIFERENCIAL
          </h2>
          <ol className="list-none p-0">
            <li className="mb-4">
              <strong>Ley de enfriamiento:</strong>
              <BlockMath math=" \frac{dT}{dt} = k(T - T_m) " />
              <p>Donde:</p>
              <BlockMath math="T_m = 20.3" />
              <p>La soluci&oacute;n a esta ecuaci&oacute;n diferencial es:</p>
              <BlockMath math=" T - 20.3 = ce^{kt} " />
              <BlockMath math=" T(t) = ce^{kt} + 20.3 " />
            </li>
            <li className="mb-4">
              <strong>Condici&oacute;n Inicial:</strong>
              <BlockMath math=" 45.0 = ce^{k \cdot 0} + 20.3 " />
              <p>Resolviendo para c, obtenemos:</p>
              <BlockMath math=" c = 25.6 " />
              <p>Por lo tanto, la soluci&oacute;n es:</p>
              <BlockMath math=" T(t) = 25.6e^{-0.032t} + 20.3 " />
              <Modalecua />
              <Infobot />
              <Ecuabut />
            </li>
            <li>
              <strong>Hallar K:</strong>
              <BlockMath math=" 36.1 = 25.6e^{k \cdot 15} + 20.3 " />
              <p>
                Para encontrar k, despejamos y aplicamos logaritmos naturales:
              </p>
              <BlockMath math=" \frac{\ln|\frac{15.8}{25.6}|}{15} = k " />
              <BlockMath math=" k = -0.032 " />
            </li>
          </ol>
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              AN&Aacute;LISIS DE LA ECUACI&Oacute;N
            </h2>
            <p className="text-2xl">
              La constante 'k', derivada de la ecuaci&oacute;n diferencial, es
              esencial para entender la relaci&oacute;n din&aacute;mica entre la
              temperatura de la gelatina l&iacute;quida y el tiempo. Al ser
              negativa, indica una disminuci&oacute;n constante en la
              temperatura a medida que el tiempo avanza. Este fen&oacute;meno
              puede interpretarse como una caracter&iacute;stica del proceso de
              enfriamiento de la gelatina l&iacute;quida debido al contacto con
              el ambiente, donde la sustancia tiende a equilibrarse
              t&eacute;rmicamente con su entorno a una velocidad decreciente.
            </p>
            <p className="text-2xl">
              La magnitud de k, en este caso, -0.032, ofrece informaci&oacute;n
              adicional. Una constante k m&aacute;s grande implicar&iacute;a una
              tasa de enfriamiento m&aacute;s r&aacute;pida, mientras que un
              valor m&aacute;s peque&ntilde;o indicar&iacute;a un enfriamiento
              m&aacute;s lento. En este contexto, el valor negativo sugiere que
              la gelatina l&iacute;quida tiende a enfriarse con el tiempo, lo
              cual se evidencia con las observaciones experimentales de la
              disminuci&oacute;n progresiva de la temperatura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Ecuaciones };
