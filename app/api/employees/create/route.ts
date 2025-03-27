import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const { name, email } = await request.json();

    db.prepare("INSERT INTO employees (name, email) VALUES (?, ?)").run(name, email);

    return NextResponse.json({ message: "Added Employee" })
}