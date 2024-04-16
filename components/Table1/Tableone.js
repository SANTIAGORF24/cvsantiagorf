import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

export function Tableone() {
  const data = [
    { index: 1, time: 0, temperature: 76.8 },
    { index: 2, time: 5, temperature: 68.6 },
    { index: 3, time: 10, temperature: 61.8 },
    { index: 4, time: 15, temperature: 57.5 },
    { index: 5, time: 20, temperature: 54.5 },
    { index: 6, time: 25, temperature: 51.1 },
    { index: 7, time: 30, temperature: 48.3 },
    { index: 8, time: 35, temperature: 45.9 },
    { index: 9, time: 40, temperature: 44.3 },
    { index: 10, time: 45, temperature: 41.9 },
    { index: 11, time: 50, temperature: 40.2 },
    { index: 12, time: 55, temperature: 38.8 },
    { index: 13, time: 60, temperature: 37.5 },
    { index: 14, time: 65, temperature: 36.1 },
    { index: 15, time: 70, temperature: 35.1 },
    { index: 16, time: 75, temperature: 34.1 },
    { index: 17, time: 80, temperature: 33.2 },
    { index: 18, time: 85, temperature: 32.4 },
    { index: 19, time: 90, temperature: 31.5 },
    { index: 20, time: 95, temperature: 30.9 },
    { index: 21, time: 100, temperature: 30.1 },
  ];

  return (
    <Table
      isHeaderSticky
      aria-label="Example table"
      css={{
        width: "80%",
        margin: "0 auto",
        "& th, & td": { borderColor: "#FFA500" },
        "& tr:nth-child(even)": { backgroundColor: "#FFF5EE" },
        "& th": { backgroundColor: "#FF8C00", color: "#fff" },
      }}
      classNames={{
        base: "max-h-[420px] overflow-scroll",
        table: "min-h-[420px]",
      }}
    >
      <TableHeader>
        <TableColumn key="index">N</TableColumn>
        <TableColumn key="time">Time (minutes)</TableColumn>
        <TableColumn key="temperature">Temperature (°C)</TableColumn>
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.time}>
            <TableCell>{item.index}</TableCell>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.temperature}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
