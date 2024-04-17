import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export function Resultados() {
  return (
    <div className="w-4/6 mx-auto py-20">
      <h2 id="resultados" className="text-3xl font-bold mb-4 text-center">
        RESULTADOS
      </h2>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Analisis de resultados"
          title="Analisis de resultados"
        >
          <div className="accordion-item">
            <p className="text-black">
              El experimento, que involucra la medición de la temperatura DE
              GELATINA LÍQUIDA a lo largo del tiempo, arroja resultados
              significativos que permiten extraer conclusiones sobre el
              comportamiento térmico de la sustancia. Inicialmente, se observa
              una tendencia decreciente en la temperatura a medida que
              transcurren los 100 minutos de la prueba, indicando un proceso de
              enfriamiento progresivo. Este comportamiento puede atribuirse a la
              pérdida de calor de la gelatina líquida hacia el entorno,
              influenciado por factores como la composición y la temperatura
              inicial del líquido.
              <br />
              <br />
              La tabla de valores revela la evolución detallada de la
              temperatura en intervalos de tiempo específicos. La variación de
              los datos muestra una disminución gradual de la temperatura, desde
              un valor inicial de 76.8 &deg;C hasta alcanzar los 30.1 &deg;C al
              final del experimento. Esta información es crucial para comprender
              la dinámica del proceso de enfriamiento y proporciona la
              INFORMACIÓN necesaria para la derivación de la ecuación
              diferencial.
              <br />
              <br />
              La pendiente de la recta tangente, calculada en diversos puntos de
              la curva temperatura-tiempo, exhibe una disminución progresiva,
              mostrando que la tasa de cambio instantánea de la temperatura con
              respecto al tiempo también se reduce a medida que avanza la
              prueba. Esto está relacionado con la capacidad térmica de la
              gelatina líquida y su interacción con el entorno.
              <br />
              <br />
              En la ecuación diferencial resultante, y = mx + b, la constante k
              representa un parámetro crucial que modela la velocidad de cambio
              de la temperatura. La constante negativa indica un descenso
              continuo en la temperatura, como se observa con los datos tomados
              en el experimento.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Conclusiones" title="Conclusiones">
          <div className="accordion-item">
            <p className="text-black">
              Tendencia de Enfriamiento: La observación de la tabla de valores
              muestra una clara tendencia de enfriamiento a lo largo del tiempo.
              La temperatura de la gelatina líquida disminuye de manera
              constante desde los 76.8 &deg;C iniciales hasta los 30.1 &deg;C al
              cabo de 100 minutos. Esto sugiere que el proceso de enfriamiento
              es persistente y continuo.
              <br />
              <br />
              Pendiente de la Recta Tangente y Constante k: La pendiente de la
              recta tangente, utilizada para derivar la ecuación diferencial,
              revela una disminución en la velocidad de enfriamiento a medida
              que transcurre el tiempo. La constante k calculada como -0.032,
              confirma esta observación, indicando una disminución constante en
              la temperatura en función del tiempo.
              <br />
              <br />
              Significado de la Constante k: La constante k negativa sugiere que
              la gelatina líquida tiende a enfriarse con el tiempo, lo cual
              concuerda con el proceso de equilibrio térmico con el entorno. La
              magnitud de indica la velocidad de este proceso, siendo en este
              caso -0.032, lo que significa que la gelatina se enfría a una tasa
              moderada.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="¿Que relarcion encuentran en la actividad propuesta y los temas vistos durante este curso?"
          title="¿Que relarcion encuentran en la actividad propuesta y los temas vistos durante este curso?"
        >
          <div className="accordion-item">
            <p className="text-black">
              Introducción a las Ecuaciones Diferenciales:
              <br />
              La actividad se centra en la medición de la temperatura de una
              mezcla de agua potable con gelatina a lo largo del tiempo, lo cual
              puede modelarse como una ecuación diferencial que describe el
              cambio de temperatura respecto al tiempo.
              <br />
              <br />
              Variables Separables:
              <br />
              La relación entre la temperatura (variable dependiente) y el
              tiempo (variable independiente) puede tratarse como una ecuación
              diferencial de variables separables, ya que se busca expresar la
              derivada de la temperatura con respecto al tiempo en función de la
              temperatura y del tiempo de manera separada.
              <br />
              <br />
              Ecuaciones Lineales:
              <br />
              La ecuación diferencial resultante puede tener una forma lineal,
              especialmente cuando se deriva la función de temperatura con
              respecto al tiempo. La pendiente de la recta tangente, que se
              utiliza para derivar la ecuación diferencial, es una medida lineal
              de la tasa de cambio instantánea de la temperatura.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="¿Cuales conceptos matematicos estudiados en cursos anteriores utilizaron para resolver la eucacion planteada?"
          title="¿Cuales conceptos matematicos estudiados en cursos anteriores utilizaron para resolver la eucacion planteada?"
        >
          <div className="accordion-item">
            <p className="text-black">
              Álgebra Lineal:
              <br />
              Sistemas de Ecuaciones: La modelización de fenómenos físicos, como
              el enfriamiento de la gelatina, a menudo implica sistemas de
              ecuaciones diferenciales lineales. La capacidad para entender y
              resolver sistemas lineales es esencial para derivar y manipular
              las ecuaciones resultantes.
              <br />
              <br />
              Cálculo Diferencial:
              <br />
              Derivadas: El cálculo de derivadas es fundamental en la obtención
              de la pendiente de la recta tangente y, por ende, en la derivación
              de la ecuación diferencial que describe el cambio en la
              temperatura respecto al tiempo. La interpretación geométrica y
              física de las derivadas se aplica directamente al análisis del
              comportamiento de la gelatina líquida en función del tiempo.
              <br />
              <br />
              Interpretación de Constantes:
              <br />
              La constante k obtenida en la ecuación diferencial tiene un
              significado físico y se relaciona con la tasa de cambio de la
              temperatura.
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
