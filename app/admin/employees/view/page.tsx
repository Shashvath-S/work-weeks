import AdminTopTitle from "@/app/components/AdminTopTitle";
import EmployeeTable from "@/app/components/TableComponent";
import { authOptions } from "@/app/lib/AuthOptions";
import db from "@/app/lib/db";
import { getServerSession } from "next-auth";

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
    latest_clock_in?: Date | string;
    latest_clock_out?: Date | string;
    total_hours?: number;
}

export default async function Page() {

    const session = await getServerSession(authOptions);

    const rows: iUser[] = await db`SELECT id, name, role FROM employees WHERE admin_id = ${session?.user.id}` as iUser[];
    console.log(rows);
    return (
        <div className="px-4 py-4 rounded-lg mx-2">
            <AdminTopTitle title="Employees" link="create" />
            <EmployeeTable columns={columns} rows={rows}/>
        </div>
    );
}
  