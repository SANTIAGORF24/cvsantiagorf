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
        <Button variant="bordered">Información</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>
          Al tomar 45.9° como nuestra condición inicial, será nuestra T(0)=
          Temperatura al transcurrir 0 minutos para hallar C.
        </DropdownItem>
        <DropdownItem>
          Tomaremos 36.1° nuestra temperatura para poder hallar K.
        </DropdownItem>
        <DropdownItem>
          Tm= Temperatura del medio presente en la cocina.
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
