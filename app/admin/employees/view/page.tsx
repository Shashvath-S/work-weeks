import EmployeeTable from "@/app/components/TableComponent";
import db from "@/app/lib/db";
import {iUser} from "@/app/components/TableComponent"

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
];


export default async function Page() {
    const rows: iUser[] = db.prepare(`SELECT id, name, role
                                      FROM employees`).all() as iUser[];
    console.log(rows);

    return (
        <div className="px-4 py-4 rounded-lg mx-2">
            <h1 style={{marginBottom: "10px"}}>
                All Employees
            </h1>
            <EmployeeTable columns={columns} rows={rows}/>
        </div>
    );
}
  