import db from "@/app/lib/db";

export async function POST(req: Request) {
    const {clockInOutSubmit, time, email} = await req.json();
    if (!time) {
        return Response.json({err: "Time was null", succeeded: false});
    }
    if (clockInOutSubmit === 'clockIn') {
        db.prepare(`UPDATE employees SET latest_clock_in = ? WHERE email = ?`).run(time, email)
        return Response.json({res: "Clocked In"})
    } else if (clockInOutSubmit === 'clockOut') {
        db.prepare(`UPDATE employees SET latest_clock_out = ? WHERE email = ?`).run(time, email)
        return Response.json({res: "Clocked Out"})
    } else if (clockInOutSubmit === 'submit') {
        db.prepare(`UPDATE employees SET total_hours = ? WHERE email = ?`).run(time, email)
        return Response.json({res: "Submitted"})
    }
}