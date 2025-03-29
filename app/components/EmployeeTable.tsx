'use client'
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";

export interface iUser {
    id: number,
    name: string,
    role: string
}

export default function EmployeeTable({ columns, rows }: {
    columns: { key: string, label: string }[],
    rows: iUser[]
}) {
    console.log("EmployeeTable: ")
    console.log("Columns:", columns);
    console.log("Rows:", rows);
    return (
        <div>
            <Table aria-label="Employee Table">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item: { id: number; name: string }) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}