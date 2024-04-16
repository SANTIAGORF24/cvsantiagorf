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
    { tangentEquation: 57.1 },
    { tangentEquation: 55.5 },
    { tangentEquation: 53.9 },
    { tangentEquation: 52.3 },
    { tangentEquation: 50.7 },
    { tangentEquation: 49.1 },
    { tangentEquation: 47.5 },
    { tangentEquation: 45.9 },
    { tangentEquation: 44.3 },
    { tangentEquation: 42.7 },
    { tangentEquation: 41.1 },
    { tangentEquation: 39.5 },
    { tangentEquation: 37.9 },
    { tangentEquation: 36.3 },
    { tangentEquation: 34.7 },
    { tangentEquation: 33.1 },
    { tangentEquation: 31.5 },
    { tangentEquation: 29.9 },
    { tangentEquation: 28.3 },
    { tangentEquation: 26.7 },
    { tangentEquation: 25.1 },
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
                  Ecuacion de la recta tangente
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
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
