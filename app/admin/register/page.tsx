'use client';

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {useState} from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {data: session} = useSession();

    if (session) {
        redirect("/home")
    }

     const handleSignup = async (e: React.FormEvent) => {
         e.preventDefault();

         const response = await fetch("api/register", {
             method: "POST",
             body: JSON.stringify({ name, username, password })
         })

         if (response.ok) {
            const signInResponse = await signIn("credentials", {
                email: username, password, redirect: false
            })
         }
     }
    return (
        <div className={"bg-center justify-center justify-items-center text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"}>
            <h1 className={"text-4xl mb-4"}>Sign Up</h1>
            <div className={"border-4 border-gray-500 rounded max-w-5xl"}>
                <form onSubmit={handleSignup}>
                    <h3 className={"text-xl"}> Name: </h3>
                    <input aria-label={"nameInput"} type={"text"} value={name} className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"} onChange={(event) => setName(event.target.value)} />
                    <h3 className={"text-xl"}> Username: </h3>
                    <input aria-label={"userNameInput"} type={"email"} value={username} className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"} onChange={(event) => setUsername(event.target.value)} />
                    <h3 className={"text-xl"}> Password: </h3>
                    <input aria-label={"passwordInput"} type={"password"} value={password} className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"} onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit" className={"mb-2 rounded-3xl bg-sky-300 hover:bg-sky-500 p-2 w-1/2"}> Submit </button>
                </form>
            </div>
        </div>
    );
}
