import db from "@/app/lib/db";

export async function POST(req: Request) {
  const { email } = await req.json();

  const result =
    await db`SELECT latest_clock_in, latest_clock_out FROM employees WHERE email = ${email}`;
  const { latest_clock_in, latest_clock_out } = result[0];

  if (latest_clock_in == null) {
    return Response.json("No clock in");
  }
  return Response.json({
    clockInTime: latest_clock_in,
    clockOutTime: latest_clock_out,
  });
}
