import TableComponent from "@/app/components/TableComponent";
import db from "@/app/lib/db";
import {iUser} from "@/app/admin/employees/view/page";
import AdminTopTitle from "@/app/components/AdminTopTitle";

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
        key: "latest_clock_in",
        label: "START TIME",
    },
    {
        key: "latest_clock_out",
        label: "END TIME",
    },
    {
        key: "total_hours",
        label: "TOTAL TIME",
    },
];

export default async function Page() {
    const getUsers: iUser[] = await db`SELECT id, name, role, latest_clock_in, latest_clock_out, total_hours FROM employees` as iUser[];
    for (const row of getUsers) {
        row.latest_clock_in = new Date(row.latest_clock_in as Date).toLocaleString();
        row.latest_clock_out = new Date(row.latest_clock_out as Date).toLocaleString();
        row.total_hours = Math.round(row.total_hours as number)
    }
    return (
        <div className="px-4 py-4">
            <AdminTopTitle title="Timesheets" link="" />
            <TableComponent columns={columns} rows={getUsers}/>
        </div>
    )
}
  