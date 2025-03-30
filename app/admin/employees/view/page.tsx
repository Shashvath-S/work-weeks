import EmployeeTable from "@/app/components/TableComponent";
import db from "@/app/lib/db";

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

export interface iUser {
    id: number;
    name: string;
    role: string;
    latest_clock_in?: Date;
    latest_clock_out?: Date;
    total?: number;
}

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
  