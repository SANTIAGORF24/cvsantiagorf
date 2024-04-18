import React from "react";
import CodeMath from "./CodeMath";
import Graficatit from "./Graficatit";

export function Mathlan() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-8 px-4 sm:px-0">
        MATLAB
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mx-auto w-full sm:w-4/5 lg:w-3/4 flex-wrap">
        <div className="w-full sm:w-1/2 p-4 py-10">
          <CodeMath />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <Graficatit />
        </div>
      </div>
    </div>
  );
}
