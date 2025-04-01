"use client";
import { iUser } from "../admin/employees/view/page";

export default function TableComponent({
  columns,
  rows,
}: {
  columns: { key: string; label: string }[];
  rows: iUser[];
}) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th key={column.key} scope="col">
                  {column.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
