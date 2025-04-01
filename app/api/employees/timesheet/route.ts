import db from "@/app/lib/db";

export async function POST(req: Request) {
    const {clockInOutSubmit, time, email} = await req.json();
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
    /*
    const {latest_clock_in, latest_clock_out, total, email} = await req.json()
    console.log("In route:", new Date(latest_clock_in).toLocaleString(), new Date(latest_clock_out).toLocaleString(), total, email)
    let getCurrentTotal;
    if (new Date(latest_clock_in).getDay() !== 1) { // Reset the total every monday so we aren't tracking last week's numbers.
        getCurrentTotal = db.prepare(`SELECT total
                                      from employees
                                      WHERE email = ?`).get(email)
    } else {
        getCurrentTotal = 0
    }
    console.log(getCurrentTotal+total)

    const postTimesheet = db.prepare(`UPDATE employees
                                      SET latest_clock_in=?,
                                          latest_clock_out=?,
                                          total=?
                                      WHERE email = ?`).run(new Date(latest_clock_in).toISOString(), new Date(latest_clock_out).toISOString(), email, total+getCurrentTotal)
    console.log(postTimesheet)
    console.log(db.prepare(`SELECT * FROM employees WHERE email = ?`).get(email))
    return Response.json({res: `Timesheet Updated for user: ${email}`})*/
}