import AdminTopTitle from "@/app/components/AdminTopTitle";
import db from "@/app/lib/db";
import { iUser } from "@/app/admin/employees/view/page";

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

export default async function Page() {
  const rows: iUser[] = await db`SELECT id, name, category, quantity, reorder, price, supplier, lastupdated
                                      FROM inventory` as iUser[];

  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="px-4 py-4 rounded-lg mx-2">
      <AdminTopTitle title="Inventory" link="create" />
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
          {rows.map((row: any) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td>{row.quantity}</td>
                <td>{row.reorder}</td>
                <td>{currencyFormatter.format(row.price)}</td>
                <td>{row.supplier}</td>
                <td>{row.lastupdated}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
