'use client';

import { redirect } from "next/navigation";
import {FormEvent, useState} from "react";

export default function CredentialsForm () {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const createEmployee = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetch("/api/employees/create", {
            method: "POST",
            body: JSON.stringify({ name, email })
        })

        redirect("/admin/home");
    }

    return (
        <div className={"bg-center justify-center justify-items-center bg-[color()] text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"}>
            <h1 className={"text-4xl mt-4 mb-4"}>Log In</h1>
            <div className={"border-4 border-gray-500 rounded-lg max-w-5xl"}>
                <form onSubmit={createEmployee}>
                    <h3 className={"text-xl"}> Employee Name: </h3>
                    <input aria-label={"nameInput"} type={"text"} value={name} className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"} onChange={(event) => setName(event.target.value)} />
                    <h3 className={"text-xl"}> Employee Username: </h3>
                    <input aria-label={"userNameInput"} value={email} className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 p-2 bg-sky-100"} onChange={(event) => setEmail(event.target.value)} />
                    <button type="submit" className={"mb-2 rounded-3xl bg-sky-300 hover:bg-sky-500 p-2 w-1/2"}> Submit </button>
                </form>
            </div>
        </div>
    );
}
