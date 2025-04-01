import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminTopTitle from "@/app/components/AdminTopTitle";
import OptionCard from "@/app/components/OptionCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user.role != "admin") {
    redirect("/");
  }

  return (
    <div>
      <div style={{ padding: "20px", width: "100%", height: "95vh" }}>
        <AdminTopTitle title="Work Weeks" link="" />
        <OptionCard title="Employees" link={"employees"} />
        <OptionCard title="Inventory" link={"inventory"} />
        <OptionCard title="Timesheets" link={"timesheets"} />
      </div>
    </div>
  );
}
