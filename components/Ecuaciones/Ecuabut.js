import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BlockMath } from "react-katex";

export function Ecuabut() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="bg-orange-500 text-white">
          Ecuación
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>
          <BlockMath math="e^{kt+c} = e^{kt} \cdot e^c" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
