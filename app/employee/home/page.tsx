import { authOptions } from "@/app/lib/AuthOptions";
import EmployeeClock from "@/app/components/EmployeeClock";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminTopTitle from "@/app/components/AdminTopTitle";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user.role != "employee") {
    redirect("/");
  }
  console.log(session.user.email);
  return (
    <div style={{ padding: "20px", width: "100%", height: "95vh" }}>
      <AdminTopTitle title="Work Weeks" link="" />
      <EmployeeClock email={session.user.email} />
    </div>
  );
}
