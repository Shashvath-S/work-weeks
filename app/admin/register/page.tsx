import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CredentialsForm from "@/app/components/CredentialsForm";
import { getServerSession } from "next-auth";

export default async function Login() {

    const backendSession = await getServerSession(authOptions);

    return <CredentialsForm isLoginForm={false} isAdmin={true} backendSession={backendSession} />
}
