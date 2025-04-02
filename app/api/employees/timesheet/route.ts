import db from "@/app/lib/db";

export async function POST(req: Request) {
    const {clockInOutSubmit, time, email} = await req.json();
    if (!time) {
        return Response.json({err: "Time was null", succeeded: false});
    }
    if (clockInOutSubmit === 'clockIn') {
        db`UPDATE employees SET latest_clock_in = ${time} WHERE email = ${email}`
        return Response.json({res: "Clocked In"})
    } else if (clockInOutSubmit === 'clockOut') {
        db`UPDATE employees SET latest_clock_out = ${time} WHERE email = ${email}`
        return Response.json({res: "Clocked Out"})
    } else if (clockInOutSubmit === 'submit') {
        db`UPDATE employees SET total_hours = ${time} WHERE email = ${email}`
        return Response.json({res: "Submitted"})
    }
}