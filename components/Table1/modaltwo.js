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

export function Modatwo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = [
    { tangentEquation: "59,9" },
    { tangentEquation: "57,9" },
    { tangentEquation: "55,9" },
    { tangentEquation: "53,9" },
    { tangentEquation: "51,9" },
    { tangentEquation: "49,9" },
    { tangentEquation: "47,9" },
    { tangentEquation: "45,9" },
    { tangentEquation: "43,9" },
    { tangentEquation: "41,9" },
    { tangentEquation: "39,9" },
    { tangentEquation: "37,9" },
    { tangentEquation: "35,9" },
    { tangentEquation: "33,9" },
    { tangentEquation: "31,9" },
    { tangentEquation: "29,9" },
    { tangentEquation: "27,9" },
    { tangentEquation: "25,9" },
    { tangentEquation: "23,9" },
    { tangentEquation: "21,9" },
    { tangentEquation: "19,9" },
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
                <TableColumn key="tangentEquation">
                  Ecuación de la recta tangente
                </TableColumn>
              </TableHeader>
              <TableBody items={data}>
                {(item) => (
                  <TableRow key={item.tangentEquation}>
                    <TableCell>{item.tangentEquation}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
