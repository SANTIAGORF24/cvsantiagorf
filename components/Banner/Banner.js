import React from "react";
import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

export function Banner() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex bg-white justify-center items-center w-4/5 space-x-20 py-20">
          <div id="inicio">
            <Image
              width={400}
              height={200}
              alt="NextUI hero Image with delay"
              src="/assets/img/ecua.jpg"
            />
          </div>
          <div space-y-20>
            <div>
              <h1 className="text-5xl font-bold text-orange-500">
                Proyecto Ecuaciones
              </h1>
              <h1 className="text-5xl font-bold text-orange-500">
                diferenciales
              </h1>
            </div>
            <div className="max-w-md py-10">
              <div className="space-y-1">
                <h4 className="text-medium font-medium ">Segunda entrega</h4>
                <p className="text-small text-default-400">
                  Edwin Julian Acuña Gomez
                </p>
              </div>
              <Divider className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-small">
                <div>Santiago Ramírez</div>
                <Divider orientation="vertical" />
                <div>Jonatan Gómez</div>
                <Divider orientation="vertical" />
                <div>Sean Osorio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
