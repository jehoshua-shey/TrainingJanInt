import { authHandler } from "@/components/Api/AuthHandler";
import NextAuth from "next-auth";

const authProcess = NextAuth(authHandler)

export { authProcess as GET, authProcess as POST }