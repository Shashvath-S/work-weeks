import { authOptions } from "@/app/lib/AuthOptions";
import CredentialsForm from "@/app/components/CredentialsForm";
import { getServerSession } from "next-auth";

export default async function Login() {

    const backendSession = await getServerSession(authOptions);

    return <CredentialsForm isLoginForm={false} isAdmin={true} backendSession={backendSession} />
}
