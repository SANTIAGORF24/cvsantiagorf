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

const TemperatureGraph = () => {
  // Puntos para la nueva recta tangente
  const tangentPoints = [
    [0, 59.9],
    [5, 57.9],
    [10, 55.9],
    [15, 53.9],
    [20, 51.9],
    [25, 49.9],
    [30, 47.9],
    [35, 45.9],
    [40, 43.9],
    [45, 41.9],
    [50, 39.9],
    [55, 37.9],
    [60, 35.9],
    [65, 33.9],
    [70, 31.9],
    [75, 29.9],
    [80, 27.9],
    [85, 25.9],
    [90, 23.9],
    [95, 21.9],
    [100, 19.9],
  ];

  // Calcular la pendiente m
  const m =
    (tangentPoints[1][1] - tangentPoints[0][1]) /
    (tangentPoints[1][0] - tangentPoints[0][0]);

  // Calcular la intersección b
  const b = tangentPoints[0][1] - m * tangentPoints[0][0];

  // Generar los puntos para la nueva tangente
  const tangentData = tangentPoints.map((point) => ({
    x: point[0],
    y: m * point[0] + b,
  }));

  const data = {
    labels: [
      "0 min",
      "5 min",
      "10 min",
      "15 min",
      "20 min",
      "25 min",
      "30 min",
      "35 min",
      "40 min",
      "45 min",
      "50 min",
      "55 min",
      "60 min",
      "65 min",
      "70 min",
      "75 min",
      "80 min",
      "85 min",
      "90 min",
      "95 min",
      "100 min",
    ],
    datasets: [
      {
        label: "Temperatura (°C)",
        data: [
          76.8, 68.6, 61.8, 57.5, 54.5, 51.1, 48.3, 45.9, 44.3, 41.9, 40.2,
          38.8, 37.5, 36.1, 35.1, 34.1, 33.2, 32.4, 31.5, 30.9, 30.1,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
      },
      {
        label: "Nueva Tangente",
        data: tangentData,
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
        text: "Temperatura vs Tiempo",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tiempo (minutos)",
        },
        min: 0,
        max: 90,
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
      <div className="w-4/5">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TemperatureGraph;
