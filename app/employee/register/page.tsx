"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ isError: false, errorMessage: "" });

  const { data: session } = useSession();

  if (session) {
    redirect(`home`);
  }

  const handleEmployeeRegisterPassword = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const response = await fetch("/api/employees/register", {
      method: "PUT",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      await signIn("credentials", { email, password, redirect: false });
    } else {
      const res = await response.json();
      setError({ isError: true, errorMessage: res.message });
    }
  };

  return (
    <div
      className={
        "bg-center justify-center justify-items-center bg-[color()] text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"
      }
    >
      <h1 className={"text-4xl mt-4 mb-4"}>Register</h1>
      <div className={"border-4 border-gray-500 rounded-lg max-w-5xl"}>
        <form onSubmit={handleEmployeeRegisterPassword}>
          <h3 className={"text-xl"}> Email: </h3>
          <input
            aria-label={"userNameInput"}
            value={email}
            className={
              "rounded enabled:hover:bg-sky-200 ml-2 mr-2 p-2 bg-sky-100"
            }
            onChange={(event) => setEmail(event.target.value)}
          />
          <h3 className={"text-xl"}> Setup Password: </h3>
          <input
            aria-label={"passwordInput"}
            type={"password"}
            value={password}
            className={
              "rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"
            }
            onChange={(event) => setPassword(event.target.value)}
          />
          {error.isError && <p>{error.errorMessage}</p>}
          <button
            type="submit"
            className={"mb-2 rounded-3xl bg-sky-300 hover:bg-sky-500 p-2 w-1/2"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
