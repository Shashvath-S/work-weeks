import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

interface IEmployeeCred {
  id: number,
  username: string,
  password: string,
  name: string
}

export async function PUT (request: NextRequest) {
  const { email, password } = await request.json();

  const checkEmail: IEmployeeCred[] = db
    .prepare(`SELECT * FROM employees WHERE email = ?`)
    .all(email) as IEmployeeCred[];

  console.log(checkEmail)

  if (checkEmail.length == 0) {
    return NextResponse.json(
      { message: "Employee does not exist, please contact your administrator" },
      { status: 401 }
    );
  } else {
    const employee = checkEmail[0];
    if (!employee.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      db.prepare(
        `UPDATE employees SET password = ? WHERE email = ?`
      ).run(hashedPassword, email);
  
      return NextResponse.json({ message: "All good" });
    } else {
      return NextResponse.json(
        { message: "Employee already has an account" },
        { status: 401 }
      );
    }
  }
}
