import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminTopTitle from "@/app/components/AdminTopTitle";
import CreateEmployeeForm from "@/app/components/CreateEmployeeForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreateEmployee() {

      const session = await getServerSession(authOptions);
    
      if (session?.user.role != "admin") {
        redirect("/");
      }

    return (
      <div style={{ padding: "20px", width: "100%", height: "95vh" }}>
      <AdminTopTitle title="Create Employee" link="view" />
      <CreateEmployeeForm id={session.user.id} />
      </div>
    )
}
