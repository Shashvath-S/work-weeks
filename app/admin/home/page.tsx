import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import OptionCard from "@/app/components/OptionCard";
import SignOutButton from "@/app/components/SignOutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home () {

  const session = await getServerSession(authOptions);

  if (session?.user.role != "admin") {
    redirect("/")
  }

    return (
        <>
        <div>
          <div style={{padding: "20px", width: "100%", height: "95vh"}}>
            <div className="relative flex items-center justify-center" style={{borderRadius: "20px", backgroundColor: "rgb(185, 187, 190)", width: "100%", height: "20vh", marginBottom: 30}}>
              <h1 style={{fontSize: "200%", color: "white", fontWeight:"bold", marginLeft: 20}}>Work Weeks</h1>
              <SignOutButton />
            </div>
            <OptionCard title="Employees" />
            <OptionCard title="Inventory" />
            <OptionCard title="Timesheets" />
          </div>
        </div>
        </>
    )
}