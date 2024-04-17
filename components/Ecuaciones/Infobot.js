import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export function Infobot() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="bg-orange-500 text-white">
          Información
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem style={{ fontWeight: "bold", color: "#FF5722" }}>
          dT/dt:
          <span style={{ fontWeight: "normal", color: "initial" }}>
            {" "}
            Representa la tasa de cambio de la temperatura T del objeto con
            respecto al tiempo t. Es decir, es la velocidad a la que la
            temperatura del objeto está cambiando en función del tiempo.
          </span>
        </DropdownItem>
        <DropdownItem style={{ fontWeight: "bold", color: "#FF5722" }}>
          K:
          <span style={{ fontWeight: "normal", color: "initial" }}>
            {" "}
            constante de proporcionalidad que depende de varios factores como la
            conductividad térmica del material del objeto, el área superficial
            expuesta, y otros factores relacionados con el entorno y las
            propiedades del objeto.
          </span>
        </DropdownItem>
        <DropdownItem style={{ fontWeight: "bold", color: "#FF5722" }}>
          Tm:
          <span style={{ fontWeight: "normal", color: "initial" }}>
            {" "}
            Temperatura del ambiente (20.3°C)
          </span>
        </DropdownItem>
        <DropdownItem style={{ fontWeight: "bold", color: "#FF5722" }}>
          T:
          <span style={{ fontWeight: "normal", color: "initial" }}>
            {" "}
            Temperatura del objeto en función del tiempo.
          </span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
