import db from "@/app/lib/db";

export async function POST(req: Request) {
    console.log("HERE")
    const {clockInOutSubmit, time, email} = await req.json();
    console.log("--------------")
    console.log(time)
    console.log(clockInOutSubmit)
    console.log(email)
    console.log("--------------")


    if (!time) {
        return Response.json({err: "Time was null", succeeded: false});
    }
    console.log(time)
    if (clockInOutSubmit === 'clockIn') {
        const postClockIn = await db`UPDATE employees SET latest_clock_in = ${time} WHERE email = ${email}`
        console.log("clockedIn")
        return Response.json({res: "Clocked In"})
    } else if (clockInOutSubmit === 'clockOut') {
        await db`UPDATE employees SET latest_clock_out = ${time} WHERE email = ${email}`
        return Response.json({res: "Clocked Out"})
    } else if (clockInOutSubmit === 'submit') {
        await db`UPDATE employees SET total_hours = ${time} WHERE email = ${email}`
        return Response.json({res: "Submitted"})
    }
}