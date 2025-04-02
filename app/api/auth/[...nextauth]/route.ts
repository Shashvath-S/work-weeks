import { authOptions } from "@/app/lib/AuthOptions";
import NextAuth from "next-auth";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };