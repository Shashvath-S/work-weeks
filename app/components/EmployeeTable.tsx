'use client'
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";

export default function EmployeeTable(props: {
    columns: { key: string, label: string }[],
    rows: { key: string, email: string }[]
}) {
    console.log("EmployeeTable: ")
    console.log("Columns:", props.columns);
    console.log("Rows:", props.rows);
    return (
        <div>
            <Table aria-label="Employee Table">
                <TableHeader columns={props.columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={props.rows}>
                    {(item: { key: string, email: string }) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}