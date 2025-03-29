import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const { name, email, role } = await request.json();

    db.prepare("INSERT INTO employees (name, email, role) VALUES (?, ?, ?)").run(name, email, role);

    return NextResponse.json({ message: "Added Employee" })
}