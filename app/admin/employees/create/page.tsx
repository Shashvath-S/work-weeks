import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateEmployeeForm from "@/app/components/CreateEmployeeForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CreateEmployee() {

      const session = await getServerSession(authOptions);
    
      if (session?.user.role != "admin") {
        redirect("/");
      }

    return <CreateEmployeeForm id={session.user.id} />
}
