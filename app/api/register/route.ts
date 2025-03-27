import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { name, email, password, isAdmin } = await request.json();
  let typeOfRegister;

  if (isAdmin) {
    typeOfRegister = "admin";
  } else {
    typeOfRegister = "employees"
  }

  const checkEmail = db
    .prepare(`SELECT * FROM ${typeOfRegister} WHERE email = ?`)
    .all(email);

  if (checkEmail.length > 0) {
    return NextResponse.json(
      { message: "User already has an account. Please Login." },
      { status: 401 }
    );
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    db.prepare(`INSERT INTO ${typeOfRegister} (email, password, name) VALUES (?, ?, ?)`).run(email, hashedPassword, name)

    return NextResponse.json({ message: "All good" });
  }
}
