import db from "@/app/lib/db";
import {NextRequest} from "next/server";

interface IEmployeeCred {
    id: number,
    username: string,
    password: string,
    name: string
}

export async function GET(req: NextRequest) {
    const getUsers = db.prepare(`SELECT *
                                 FROM employees`).all() as IEmployeeCred[]
    return Response.json(getUsers)
}
