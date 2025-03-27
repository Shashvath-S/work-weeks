import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export interface IUser {
    id: number,
    email: string,
    password: string,
    name: string
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        let user, role;
        let getUser: IUser[] = db
          .prepare("SELECT * FROM admin WHERE email = ?")
          .all(credentials?.email) as IUser[];

        if (getUser.length > 0) {
          role = "admin";
        } else {
          getUser = db
          .prepare("SELECT * FROM employees WHERE email = ?")
          .all(credentials?.email) as IUser[];
          if (getUser.length > 0) {
            role = "employee";
          } else {
            throw new Error("User does not exist. Please Register");
          }
        }

        user = getUser[0];

        const validPassword = await bcrypt.compare(
          credentials?.password || "",
          user.password
        );

        if (validPassword) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };