"use client";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
  } from "@heroui/table";
  
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
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
      key: "status",
      label: "STATUS",
    },
  ];
  
  export default function Page() {
    return (
        <div className="px-4 py-4 rounded-lg mx-2">
            <h1 style={{marginBottom: "10px"}}>
              All Employees
            </h1>
            <div>
              <table className="table-auto w-full border border-gray-400 rounded-full">
                <thead>
                  <tr className="border border-gray-300">
                    <th className="border border-gray-300">NAME</th>
                    <th className="border border-gray-300">ROLE</th>
                    <th className="border border-gray-300">
                        <div className="flex items-center relative h-12 justify-end">
                          <div className="absolute left-1/2 -translate-x-1/2">
                            STATUS
                          </div>
                          <div>
                            <a href="create" type="button" className="ml-auto text-white bg-blue-500 hover:bg-blue-700 rounded-full p-1 text-center inline-flex items-end me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <svg width="20" height="20" viewBox="0 0 20 20">
                                <line x1="5" y1="10" x2="15" y2="10" stroke="white" strokeWidth="2" />
                                <line x1="10" y1="5" x2="10" y2="15" stroke="white" strokeWidth="2" />
                              </svg>
                            </a>
                          </div>
                        </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(row => 
                    <tr key={row.key} className="border border-gray-300">
                      <td className="border border-gray-300">{row.name}</td>
                      <td className="border border-gray-300">{row.role}</td>
                      <td className="border border-gray-300">{row.status}</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div style={{position: "relative", bottom: "203px", left: "95%"}}>
              
              </div>
            </div>
            
        </div>
  );
}
  