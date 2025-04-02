import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { name, email, password, isAdmin } = await request.json();
  let checkEmail;

  if (isAdmin) {
    checkEmail = await db`SELECT * FROM admin WHERE email = ${email}`
  } else {
    checkEmail = await db`SELECT * FROM employees WHERE email = ${email}`
  }

  if (checkEmail.length > 0) {
    return NextResponse.json(
      { message: "User already has an account. Please Login." },
      { status: 401 }
    );
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (isAdmin) {
      await db`INSERT INTO admin (email, password, name) VALUES (${email}, ${hashedPassword}, ${name})`
    } else {
      await db`INSERT INTO employees (email, password, name) VALUES (${email}, ${hashedPassword}, ${name})`
    }
    return NextResponse.json({ message: "All good" });
  }
}
