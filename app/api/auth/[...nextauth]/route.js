import User from "@/models/users";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt";

export const authHandler = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req) {
                try {
                    await connectToDB()

                    const { email, password } = credentials;

                    const user = await User.findOne({ email: email });

                    if (user) {
                        const passwordMatch = await bcrypt.compare(password, user.hashed_password)

                        if (passwordMatch) {
                            console.log('User exists')
                            return user
                        }
                        else {
                            console.log('Email or password is incorrect')
                            return null
                        }
                    }
                    else {
                        console.log('User does not exist')
                        console.log(email)
                        return null
                    }
                } catch (error) {
                    console.log('Auth error:', error)
                }
            }
        })
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user)
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user
            return session
        }
    },
};

const authProcess = NextAuth(authHandler)

export { authProcess as GET, authProcess as POST }