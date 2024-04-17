import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { BlockMath } from "react-katex";

export function Sliderpreguntas() {
  return (
    <div className="w-4/6 mx-auto border-2 border-orange-500 rounded-md">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-md"
      >
        <SwiperSlide>
          <div className="flex flex-col space-y-5">
            <div className="text-orange-500 font-bold text-2xl mb-4">
              ¿Cuál es la temperatura luego de 3 horas de haber iniciado el
              experimento?
            </div>
            <div>
              <BlockMath math="T(t) = 25.6e^{-0.016 \times 180} + 20.3" />
              <BlockMath math="T(t) = 21.74°C" />
            </div>
            <div>
              <p>
                La temperatura del objeto después de 3 horas habrá disminuido
                hasta 21.74 grados Celsius.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col space-y-5">
            <div className="text-orange-500 font-bold text-2xl mb-4">
              Si la temperatura es 38°C ¿cuánto tiempo ha pasado desde que
              inició el experimento? ¿qué hora era?
            </div>
            <div>
              <BlockMath math="38 = 25.6e^{-0.016t} + 20.3" />
              <BlockMath math="\frac{17.7}{25.6} = e^{-0.016t}" />
              <BlockMath math="\left(\ln\left|\frac{17.7}{25.6}\right|\right)/(-0.016) = t" />
              <BlockMath math="t = 23.06 mins" />
            </div>
            <div>
              <p>
                Para que el objeto se llegue a enfriar hasta 38°C deben haber
                pasado exactamente 23.06 minutos.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
