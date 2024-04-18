import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GelatinaGraph = () => {
  const tiempo = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100,
  ];
  const temperatura = [
    76.8, 68.6, 61.8, 57.5, 54.4, 51.1, 48.3, 45.9, 44.3, 41.9, 40.2, 38.8,
    37.5, 36.1, 35.1, 34.1, 33.4, 32.4, 31.5, 30.9, 30.1,
  ];
  const recta_tangente = [
    64.1, 61.5, 58.9, 56.3, 53.7, 51.1, 48.5, 45.9, 43.3, 40.7, 38.1, 35.5,
    32.9, 30.3, 27.7, 25.1, 22.5, 19.9, 17.3, 14.7, 12.1,
  ];

  const data = {
    labels: tiempo.map((t) => `${t} min`),
    datasets: [
      {
        label: "Temperatura (°C)",
        data: temperatura,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
      },
      {
        label: "Recta Tangente",
        data: recta_tangente,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Enfriamiento de la Gelatina",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tiempo (minutos)",
        },
        min: 0,
        max: 100,
      },
      y: {
        title: {
          display: true,
          text: "Temperatura (°C)",
        },
        min: 0,
        max: 90,
      },
    },
  };

  return (
    <div id="grafica" className="flex justify-center w-full py-20">
      <div className="w-3/4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GelatinaGraph;
