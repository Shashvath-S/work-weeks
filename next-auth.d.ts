import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
    interface User extends DefaultUser {
        id: number;
        username: string;
        name: string;
        role: string;
    }

    interface Session {
        user: User;
    }
}

