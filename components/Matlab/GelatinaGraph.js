import React from "react";
import Plot from "react-plotly.js";

const GelatinaGraph = () => {
  // Datos de la tabla
  const tiempo = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100,
  ];
  const temperatura = [
    76.8, 68.6, 61.8, 57.5, 54.4, 51.1, 48.3, 45.9, 44.3, 41.9, 40.2, 38.8,
    37.5, 36.1, 35.1, 34.1, 33.4, 32.4, 31.5, 30.9, 30.1,
  ];
  const rectaTangente = [
    64.1, 61.5, 58.9, 56.3, 53.7, 51.1, 48.5, 45.9, 43.3, 40.7, 38.1, 35.5,
    32.9, 30.3, 27.7, 25.1, 22.5, 19.9, 17.3, 14.7, 12.1,
  ];

  return (
    <div>
      <Plot
        data={[
          {
            x: tiempo,
            y: temperatura,
            type: "scatter",
            mode: "lines+markers",
            name: "Temperatura",
            line: { color: "blue" },
          },
          {
            x: tiempo,
            y: rectaTangente,
            type: "scatter",
            mode: "lines",
            name: "Recta Tangente",
            line: { color: "red", dash: "dash" },
          },
        ]}
        layout={{
          width: 800,
          height: 600,
          title: "Enfriamiento de la Gelatina",
          xaxis: { title: "Tiempo (minutos)" },
          yaxis: { title: "Temperatura (°C)" },
          legend: { x: 0, y: 1, traceorder: "reversed", font: { size: 16 } },
          grid: { rows: 1, columns: 1 },
        }}
      />
    </div>
  );
};

export default GelatinaGraph;
