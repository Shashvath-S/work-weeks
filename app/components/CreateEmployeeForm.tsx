"use client";

import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreateEmployeeForm({ id }: { id: number }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [otp, setOtp] = useState("");

  const createEmployee = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myOtp = (Math.random() * 1000000 - 1) as unknown as string;
    setOtp(myOtp);

    console.log(name, email, role);
    await fetch("/api/employees/create", {
      method: "POST",
      body: JSON.stringify({ name, email, role, id, myOtp }),
    });
  };

  return (
    <div
      className={
        "text-center flex items-center justify-center min-w-5xl"
      }
      style={{width: "100%"}}
    >
      <div  className={"border-4 border-gray-500 rounded-lg min-w-5xl"}>
        <form onSubmit={createEmployee}>
          <h3 className={"text-xl"}> Employee Name: </h3>
          <input
            aria-label={"nameInput"}
            type={"text"}
            value={name}
            className={
              "rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"
            }
            onChange={(event) => setName(event.target.value)}
          />
          <h3 className={"text-xl"}> Employee Email: </h3>
          <input
            aria-label={"userNameInput"}
            value={email}
            type={email}
            className={
              "rounded enabled:hover:bg-sky-200 ml-2 mr-2 p-2 bg-sky-100"
            }
            onChange={(event) => setEmail(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <br />
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {role == "" ? "Select Position" : role}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => setRole("Employee Type 1")}>
                  Employee Type 1
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setRole("Employee Type 2")}>
                Employee Type 2
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setRole("Employee Type 3")}>
                    Employee Type 3
                </button>
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className={"mb-2 rounded-3xl bg-sky-300 hover:bg-sky-500 p-2 w-1/2"}
          >
            Submit
          </button>

          <div>{otp && `Your otp is ${otp}`}</div>
        </form>
      </div>
    </div>
  );
}
