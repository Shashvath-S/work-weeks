import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { name, username, password } = await request.json();

  const checkEmail = db
    .prepare("SELECT * FROM admin WHERE username = ?")
    .all(username);

  if (checkEmail.length > 0) {
    return NextResponse.json(
      { message: "User already has an account. Please Login." },
      { status: 401 }
    );
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    db.prepare("INSERT INTO admin (username, password, name) VALUES (?, ?, ?)").run(username, hashedPassword, name)

    return NextResponse.json({ message: "All good" });
  }
}
