import React, { useState } from "react";
import { GraficaDada } from "./GraficaDada";

const CodeMath = () => {
  const [isCopied, setIsCopied] = useState(false);

  const data = `% Datos de la tabla
  tiempo = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]; % Tiempo en minutos
  temperatura = [76.8, 68.6, 61.8, 57.5, 54.4, 51.1, 48.3, 45.9, 44.3, 41.9, 40.2, 38.8, 37.5, 36.1, 35.1, 34.1, 33.4, 32.4, 31.5, 30.9, 30.1]; % Temperatura en °C
  recta_tangente = [64.1, 61.5, 58.9, 56.3, 53.7, 51.1, 48.5, 45.9, 43.3, 40.7, 38.1, 35.5, 32.9, 30.3, 27.7, 25.1, 22.5, 19.9, 17.3, 14.7, 12.1]; % Recta tangente en °C
  
  % Gráfica
  figure;
  plot(tiempo, temperatura, 'b-o', 'DisplayName', 'Temperatura');
  hold on;
  plot(tiempo, recta_tangente, 'r--', 'DisplayName', 'Recta Tangente');
  title('Enfriamiento de la Gelatina');
  xlabel('Tiempo (minutos)');
  ylabel('Temperatura (°C)');
  legend('Location', 'southwest');
  grid on;
  
  
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="code-math bg-gray-900 text-gray-300 font-mono p-6 rounded-md shadow-md space-x-5">
      <pre className="code-console whitespace-pre-wrap text-sm">
        <code>{data}</code>
      </pre>
      <button
        className={`copy-btn bg-blue-500 text-white px-4 py-2 rounded-md text-sm mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isCopied ? "bg-green-500 hover:bg-green-600" : ""
        }`}
        onClick={handleCopy}
      >
        {isCopied ? "Copiado!" : "Copiar"}
      </button>
      <GraficaDada />
    </div>
  );
};

export default CodeMath;
