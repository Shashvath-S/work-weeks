import TableComponent from "@/app/components/TableComponent";
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
    {
        key: "day",
        label: "DAY",
    },
    {
        key: "start",
        label: "START TIME",
    },
    {
        key: "end",
        label: "END TIME",
    },
    {
        key: "total",
        label: "TOTAL TIME",
    },
];

interface timesheet {
    name: string,
    role: string,
    day?: Date,
    start?: number,
    end?: number,
    total?: number,
}

export default function Page() {
    const getUsers: timesheet[] = db.prepare("SELECT * FROM employees").all() as timesheet[];

    return (
        <div className="px-4 py-4">
            <TableComponent columns={columns} rows={getUsers}/>
        </div>
    )
}
  