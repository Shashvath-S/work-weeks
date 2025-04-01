import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const { name, email, role, id, otp } = await request.json();

    db.prepare("INSERT INTO employees (name, email, role, admin_id, otp) VALUES (?, ?, ?, ?, ?)").run(name, email, role, id, otp);

    return NextResponse.json({ message: "Added Employee" })
}