"use client";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
  } from "@heroui/table";
  
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      day: "Monday",
      start: "1:00 PM",
      end: "5:00 PM",
      total: "4 hours"
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      day: "Monday",
      start: "",
      end: "",
      total: ""
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      day: "Monday",
      start: "5:30 AM",
      end: "3:30 PM",
      total: "10 hours"
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      day: "Tuesday",
      start: "7:30 AM",
      end: "6:30 PM",
      total: "11 hours"
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "day",
      label: "DAY",
    },
    {
      key: "start",
      label: "START TIME",
    },
    {
      key: "end",
      label: "END TIME",
    },
    {
      key: "total",
      label: "TOTAL TIME",
    },
  ];
  
  export default function Page () {
    return (
        <div className="px-4 py-4">
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
                </TableBody>
            </Table>
        </div>
    )
  }
  