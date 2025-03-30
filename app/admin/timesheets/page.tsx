import TableComponent from "@/app/components/TableComponent";
import db from "@/app/lib/db";
import {iUser} from "@/app/admin/employees/view/page";

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
        key: "total",
        label: "TOTAL TIME",
    },
];

export default function Page() {
    const getUsers: iUser[] = db.prepare("SELECT id, name, role, latest_clock_in, latest_clock_out, total FROM employees").all() as iUser[];
    for (let i = 0; i < getUsers.length; i += 1) {
        if (getUsers[i].total !== undefined) {
            // @ts-expect-error idk why it says object is possibly null, it isn't, like I literally just checked if
            // it was undefined in the if statement
            getUsers[i].total = getUsers[i].total / 1000 / 60 / 60
        }
    }
    return (
        <div className="px-4 py-4">
            <TableComponent columns={columns} rows={getUsers}/>
        </div>
    )
}
  