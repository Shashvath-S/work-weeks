'use client'
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";

export interface iUser {
    id: number;
    name: string;
    role?: string;
}

export default function TableComponent(props: {
    columns: { key: string, label: string }[],
    rows: iUser[]
}) {

    return (
        <div>
            <Table aria-label="Table Component">
                <TableHeader columns={props.columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={props.rows}>
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