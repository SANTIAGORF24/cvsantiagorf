import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export function Modalone() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = [
    { derivative: -0.882857143 },
    { derivative: -0.756666667 },
    { derivative: -0.636 },
    { derivative: -0.58 },
    { derivative: -0.573333333 },
    { derivative: -0.52 },
    { derivative: -0.48 },
    { derivative: "#¡DIV/0!" },
    { derivative: -0.32 },
    { derivative: -0.4 },
    { derivative: -0.38 },
    { derivative: -0.355 },
    { derivative: -0.336 },
    { derivative: -0.326666667 },
    { derivative: -0.308571429 },
    { derivative: -0.295 },
    { derivative: -0.282222222 },
    { derivative: -0.27 },
    { derivative: -0.261818182 },
    { derivative: -0.25 },
    { derivative: -0.243076923 },
  ];

  return (
    <>
      <Button onPress={onOpen} className="bg-orange-500 text-white">
        Ver tabla
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody>
            <Table
              aria-label="Example table"
              css={{
                width: "100%",
                "& th, & td": {
                  borderColor: "#FFA500",
                },
                "& tr:nth-child(even)": {
                  backgroundColor: "#FFF5EE",
                },
                "& th": {
                  backgroundColor: "#FF8C00",
                  color: "#fff",
                },
              }}
            >
              <TableHeader>
                <TableColumn key="derivative">
                  Derivada (Pendiente de la recta Tangente)
                </TableColumn>
              </TableHeader>
              <TableBody items={data}>
                {(item) => (
                  <TableRow key={item.derivative}>
                    <TableCell>{item.derivative}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              salir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
