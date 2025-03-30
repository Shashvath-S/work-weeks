import db from "@/app/lib/db";

export async function POST(req: Request) {
    const {lci, lco, total, email} = await req.json()
    console.log(lci, lco, total, email)
    let getCurrentTotal;
    if (new Date(lci).getDay() !== 1) { // Reset the total every monday so we aren't tracking last week's numbers.
        getCurrentTotal = db.prepare(`SELECT total
                                      from employees
                                      WHERE email = ${email}`).get()
    } else {
        getCurrentTotal = 0
    }

    const postTimesheet = db.prepare(`UPDATE employees
                                      SET latest_clock_in=${lci},
                                          latest_clock_out=${lco},
                                          total=${total + getCurrentTotal}
                                      WHERE email = ${email}`).run()
    console.log(postTimesheet)
}