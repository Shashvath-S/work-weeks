import db from "@/app/lib/db";

export async function POST(req: Request) {
    const { email } = await req.json();
    const result =
        await db`SELECT otp FROM employees WHERE email = ${email}`;
    const { otp } = result[0];
    if (otp == null) {
        return Response.json("No OTP");
    }
    return Response.json({
        myOTP: otp
    });
}
