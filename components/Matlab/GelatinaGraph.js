import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

  const data = tiempo.map((t, i) => ({
    time: t,
    temp: temperatura[i],
    tgt: rectaTangente[i],
  }));

  return (
    <div>
      <LineChart width={800} height={600} data={data}>
        <XAxis
          dataKey="time"
          label={{
            value: "Tiempo (minutos)",
            position: "insideBottom",
            dy: 20,
          }}
        />
        <YAxis
          label={{
            value: "Temperatura (°C)",
            angle: -90,
            position: "insideLeft",
            dy: -10,
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <Line type="monotone" dataKey="tgt" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default GelatinaGraph;
