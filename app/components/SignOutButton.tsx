"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton () {
    return <button onClick={() => signOut({ callbackUrl: "/" })} className="btn btn-primary absolute top-2 right-2">Sign Out</button>
}