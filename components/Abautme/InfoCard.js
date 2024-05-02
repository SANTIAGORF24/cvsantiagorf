import React from "react";
import { FaPrint, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@nextui-org/react";

const InfoCard = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]">
        <div className="flex justify-between">
          <div className="flex-1 p-10 border-b border-blue-200">
            {" "}
            {/* Añadido */}
            <h2 className="text-2xl font-bold mb-2 py-5">Who am I?</h2>
            <p className="mb-4">
              A Web Designer / Developer Located In Our Lovely Earth
            </p>
            <p className="mb-4">
              As a Systems Engineering student, I have led strategic projects in
              both governmental and business entities, showcasing my commitment
              to technological innovation and excellent design. My experience at
              the Ministry of Sports and the National College of Urban Curators
              has enriched my skills in application development, spanning from
              HTML and CSS3 to Python, React, and Flask.
            </p>
            <Button className="bg-red-500 text-white w-fit">
              <FaPrint className="w-4 h-4 mr-1" /> Download My CV
            </Button>
          </div>
          <div className="border-l border-blue-200 flex-1 p-10 border-b">
            {" "}
            {/* Añadido */}
            <h2 className="text-2xl font-bold mb-2 py-5">Personal Info</h2>
            <p className="mb-2">
              <strong>Birthdate:</strong> 24/12/1002
            </p>
            <p className="mb-2">
              <strong>Email:</strong> santiforero57@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> + (57) 3154852832
            </p>
            <p className="mb-2">
              <strong>Github:</strong>{" "}
              <a
                href="https://github.com/SANTIAGORF24"
                target="_blank"
                rel="noopener noreferrer"
              >
                SANTIAGORF24
              </a>
            </p>
            <p className="mb-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/santiago-ramírez-forero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Santiago Ramírez Forero
              </a>
            </p>
            <div className="flex">
              <a
                href="https://github.com/SANTIAGORF24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-blue-200 w-8 h-8 mx-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-ramírez-forero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-200 w-8 h-8 mx-2" />
              </a>
            </div>
          </div>
          <div className="border-l border-blue-200 flex-1 p-10 border-b">
            {" "}
            {/* Añadido */}
            <h2 className="text-2xl font-bold mb-2 py-5">My Experience</h2>
            <div className="mb-2">
              <p>
                <strong>Systems Engineering Student (5th Semester)</strong> |
                San Buenaventura University, Colombia
              </p>
              <p>
                <strong>
                  Web Developer and Application Support Specialist
                </strong>{" "}
                | Ministry of Sports
              </p>
              <p>
                <strong>Multimedia Designer and Technical Support</strong> |
                National College of Urban Curators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
