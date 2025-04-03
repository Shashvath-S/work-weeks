"use client";

import { signOut } from "next-auth/react";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

export function SignOutButton () {
    return <button style={{borderRadius: "15px", color: "white", border: "none"}} onClick={() => signOut({ callbackUrl: "/" })} className="btn btn-outline-primary absolute top-2 right-2"><LogoutIcon /></button>
}

export function HomeButton () {
    return <a style={{borderRadius: "15px", color: "white", border: "none"}} className="btn btn-outline-primary absolute top-2 left-2" href="/admin/home"><HomeIcon /></a>
}