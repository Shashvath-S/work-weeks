import AdminTopTitle from "@/app/components/AdminTopTitle";
import EmployeeTable from "@/app/components/TableComponent";
import db from "@/app/lib/db";

const columns = [
    {
        key: "itemID",
        label: "ITEM ID",
    },
    {
        key: "itemName",
        label: "ITEM NAME",
    },
    {
        key: "category",
        label: "CATEGORY",
    },
    {
        key: "quantityInStock",
        label: "QUANTITY IN STOCK",
    },
    {
        key: "reorderLevel",
        label: "REORDER LEVEL",
    },
    {
        key: "unitPrice",
        label: "UNIT PRICE",
    },
    {
        key: "supplier",
        label: "SUPPLIER",
    },
    {
        key: "lastUpdated",
        label: "LAST UPDATED",
    },
];

export interface iUser {
    id: number;
    name: string;
    role?: string;
}

export default async function Page() {
    const rows: iUser[] = db.prepare(`SELECT id, name, role
                                      FROM employees`).all() as iUser[];
    console.log(rows);

    return (
        <div className="px-4 py-4 rounded-lg mx-2">
            <AdminTopTitle title="Inventory" link="create" />
            <EmployeeTable columns={columns} rows={rows}/>
        </div>
    );
}
  