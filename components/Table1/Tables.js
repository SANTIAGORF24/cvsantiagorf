import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Modalone } from "./modalone";
import { Modatwo } from "./modaltwo";
export function Tables() {
  return (
    <div className="flex justify-center gap-4">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="/assets/img/ecua.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">PENDIENTE DE LA RECTA TANGENTE</p>
            <p className="text-small text-default-500">m*(y1-y2)/(x1-x2)</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            La pendiente de la recta tangente a una curva en un punto es la tasa
            de cambio instantánea de la función en ese punto. En otras palabras,
            indica la dirección en la que la curva se mueve en ese punto
            específico. mediante su ecuación M*(y1-y2)/(x1-x2) podemos encontrar
            los datos de la tabla para nuestro proyecto
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Modalone />
        </CardFooter>
      </Card>

      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="/assets/img/ecua.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Ecuación DE LA RECTA TANGENTE</p>
            <p className="text-small text-default-500">(Y=mx+b)</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            la pendiente de la recta tangente a una curva en un punto específico
            juega un papel crucial al describir el comportamiento local de la
            función. Esta medida no solo refleja la dirección instantánea en la
            que la curva se inclina, sino que también abre un mundo de
            posibilidades para analizar funciones, optimizar soluciones y
            resolver problemas en geometría y otras áreas. La ecuación de la
            recta tangente a la función f(x) y=mx+b
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Modatwo />
        </CardFooter>
      </Card>
    </div>
  );
}
