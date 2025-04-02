import { authOptions } from "@/app/lib/AuthOptions";
import AdminTopTitle from "@/app/components/AdminTopTitle";
import OptionCard from "@/app/components/OptionCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import BootstrapOptionCard from "@/app/components/BootstrapOptionCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user.role != "admin") {
    redirect("/");
  }

  return (
    <div>
      <div style={{ padding: "20px 20px 0 20px", width: "100%", height: "95vh" }}>
        <AdminTopTitle title="Work Weeks" link="" />
        <div className="row">
          <div className="col">
            <BootstrapOptionCard title="Employees" link={"employees"} />
          </div>
          <div className="col">
            <BootstrapOptionCard title="Inventory" link={"inventory"} />
          </div>
          <div className="col">
            <BootstrapOptionCard title="Timesheets" link={"timesheets"} />
          </div>
        </div>
        {/* <OptionCard title="Employees" link={"employees"} />
        <OptionCard title="Inventory" link={"inventory"} />
        <OptionCard title="Timesheets" link={"timesheets"} /> */}
      </div>
    </div>
  );
}
