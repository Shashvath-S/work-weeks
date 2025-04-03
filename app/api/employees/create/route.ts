import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const { name, email, role, id, myOtp } = await request.json();

    await db`INSERT INTO employees (name, email, role, admin_id, otp) VALUES (${name}, ${email}, ${role}, ${id}, ${myOtp})`

    return NextResponse.json({ message: "Added Employee" })
}