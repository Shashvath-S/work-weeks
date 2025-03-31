'use client';

import {FormEvent, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default function CredentialsForm({isLoginForm, isAdmin, backendSession}: {
    isLoginForm: boolean,
    isAdmin: boolean,
    backendSession: any
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const {data: clientSession} = useSession();

    const session = clientSession || backendSession;

    if (session) {
        redirect(`home`)
    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn("credentials", {email, password, redirect: false});
        if (res && !res.ok) {
            setError(res.error as string)
        } else {
            setError('')
        }
    }

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({name, email, password, isAdmin})
        })

        if (response.ok) {
            const signInResponse = await signIn("credentials", {
                email, password, redirect: false
            })
        }
    }

    return (
        <div
            className={"bg-center justify-center justify-items-center bg-[color()] text-center grid grid-flow-row auto-rows-max grow min-w-full items-center place-content-center h-dvh bg-cover"}>
            <h1 className={"text-4xl mt-4 mb-4"}>{isLoginForm ? "Log in" : "Register"}</h1>
            <div className={"border-4 border-gray-500 rounded-lg max-w-5xl"}>
                <form onSubmit={isLoginForm ? handleLogin : handleRegister}>
                    {!isLoginForm &&
                        <>
                            <h3 className={"text-xl"}> Name: </h3>
                            <input required aria-label={"nameInput"} type={"text"} value={name}
                                   className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"}
                                   onChange={(event) => setName(event.target.value)}/>
                        </>
                    }
                    <h3 className={"text-xl"}> Email: </h3>
                    <input required aria-label={"userNameInput"} value={email}
                           className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 p-2 bg-sky-100"}
                           onChange={(event) => setEmail(event.target.value)}/>
                    <h3 className={"text-xl"}> Password: </h3>
                    <input required aria-label={"passwordInput"} type={"password"} value={password}
                           className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"}
                           onChange={(event) => setPassword(event.target.value)}/>
                    {!isLoginForm &&
                    <>
                    <h3 className={"text-xl"}> Confirm Password: </h3>
                    <input required aria-label={"nameInput"} type={"password"} value={checkPassword} className={"rounded enabled:hover:bg-sky-200 ml-2 mr-2 mb-2 p-2 bg-sky-100"} onChange={(event) => setCheckPassword(event.target.value)} />
                    {(checkPassword != password && password != "") && <p>Passwords do not match</p> }
                    </> 
                    }
                    <button type="submit" className={"mb-2 rounded-3xl bg-sky-300 hover:bg-sky-500 p-2 w-1/2"}> Submit
                    </button>
                    <div>
                        {error === 'User does not exist. Please Register' ? 'This user does not exist' : ""}
                    </div>
                </form>
            </div>
        </div>
    );
}
