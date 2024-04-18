import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export function GraficaDada() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-500 text-white">
        Imagen gráfica dada por Matlab
      </Button>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Imagen gráfica dada por Matlab
              </ModalHeader>
              <ModalBody>
                <img src="/assets/img/Grafica.jpg" alt="Imagen gráfica" />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="error"
                  variant="light"
                  onPress={onClose}
                  css={{
                    backgroundColor: "orange-500",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "orange-600",
                    },
                  }}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
