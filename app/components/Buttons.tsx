"use client";

import { signOut } from "next-auth/react";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

export function SignOutButton () {
    return <button style={{borderRadius: "15px"}} onClick={() => signOut({ callbackUrl: "/" })} className="btn btn-primary absolute top-2 right-2 bg-green-600 border-blue-950"><LogoutIcon /></button>
}

export function HomeButton () {
    return <a style={{borderRadius: "15px"}} className="btn btn-primary absolute top-2 left-2 bg-green-600 border-blue-950" href="/admin/home"><HomeIcon /></a>
}