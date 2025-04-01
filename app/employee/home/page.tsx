import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import EmployeeClock from "@/app/components/EmployeeClock";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (session?.user.role != "employee") {
        redirect("/");
    }
    console.log(session.user.email);
    return <EmployeeClock email={session.user.email}/>
}