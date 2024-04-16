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
  // Puntos para la tangente
  const tangentPoints = [
    [0, 57.1],
    [5, 55.5],
    [10, 53.9],
    [15, 52.3],
    [20, 50.7],
    [25, 49.1],
    [30, 47.5],
    [35, 45.9],
    [40, 44.3],
    [45, 42.7],
    [50, 41.1],
    [55, 39.5],
    [60, 37.9],
    [65, 36.3],
    [70, 34.7],
    [75, 33.1],
    [80, 31.5],
    [85, 29.9],
    [90, 28.3],
    [95, 26.7],
    [100, 25.1],
  ];

  // Calcular la pendiente m
  const m =
    (tangentPoints[1][1] - tangentPoints[0][1]) /
    (tangentPoints[1][0] - tangentPoints[0][0]);

  // Calcular la intersección b
  const b = tangentPoints[0][1] - m * tangentPoints[0][0];

  // Generar los puntos para la tangente
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
        label: "Tangente",
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
    <div className="flex justify-center w-full py-20">
      <div className="w-4/5">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TemperatureGraph;
