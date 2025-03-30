'use client'
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";
import { iUser } from "../admin/employees/view/page";

export default function TableComponent({columns, rows}: {
    columns: { key: string, label: string }[],
    rows: iUser[],
}) {

    return (
        <div>
            <Table aria-label="Table Component">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>

                    {/*No matter what, the items array we pass in will have an id value for each value so we should
                     be good for this */
                        (item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                </TableBody>
            </Table>
        </div>
    )
}