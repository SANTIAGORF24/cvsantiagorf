import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export function Modalecua() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="bg-orange-500 text-white">
          Datos iniciales
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>T(0) = 45.9°</DropdownItem>
        <DropdownItem>T(15) = 36.1°</DropdownItem>
        <DropdownItem>Tm = 20.3°</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
