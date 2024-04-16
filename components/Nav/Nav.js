import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export function Nav() {
  return (
    <Navbar shouldHideOnScroll className="">
      <NavbarBrand>
        <Image
          src="/assets/img/Logo.jpg"
          className="w-100"
          width={120}
          height={120}
          style={{ width: "auto", height: "auto" }} // Agrega estos estilos
          alt="logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" className="text-orange-500">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-orange-500">
            Tablas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-orange-500">
            Grafica
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
