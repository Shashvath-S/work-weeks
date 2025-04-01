import db from "@/app/lib/db";

export async function POST(req: Request) {
    const {email} = await req.json();

    const {latest_clock_in, latest_clock_out} = db.prepare(`SELECT latest_clock_in, latest_clock_out FROM employees WHERE email = ?`).get(email) as {latest_clock_in: string, latest_clock_out: string};
    if (latest_clock_in == null) {
        return Response.json("No clock in");
    }
    return Response.json({clockInTime: latest_clock_in, clockOutTime: latest_clock_out})
}