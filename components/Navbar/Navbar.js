import React from "react";
import { FaGithub, FaLinkedin, FaPrint } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between px-4 py-3 bg-transparent fixed w-full z-10">
          <div className="flex items-center px-4 md:px-40">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </nav>
        <div
          className="banner"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('/assets/img/personal.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
            textAlign: "left",
            color: "white",
            paddingTop: "50px",
            paddingLeft: "20px",
            position: "relative",
          }}
        >
          <div className="px-4 md:px-40 py-20 flex flex-col space-y-5">
            <h1 className="text-4xl">Hello, I am</h1>
            <h1 className="text-6xl font-bold">Santiago Ramírez Forero</h1>
            <p className="w-full md:w-2/6">
              Especialista en Soporte de Aplicaciones y Tecnología |
              Desarrollador Full Stack | React | Flask | Python |Soporte Técnico
              | Gestión de Proyectos | Administración de Redes | Capacitador
              Tecnológico
            </p>
            <Button className="bg-red-500 text-white w-fit">
              <FaPrint className="w-4 h-4 mr-1" /> Print Resume
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <nav className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-60 z-10 p-4 border border-gray-300 rounded-md shadow-md w-full left-0">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-200 text-xl font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-200 text-xl font-semibold"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-200 text-xl font-semibold"
          ></a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-200 text-xl font-semibold"
          >
            Experiens
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-200 text-xl font-semibold"
          >
            Contact
          </a>
        </nav>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-blue-200 bg-blue-100 w-32 md:w-48 h-32 md:h-48 flex items-center justify-center z-20">
          <Image
            src="/assets/img/logo.png"
            alt="Imagen"
            width={600}
            height={600}
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
