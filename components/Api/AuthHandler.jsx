import User from "@/models/users";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt"

export const authHandler = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
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
                            console.log('password match')
                            return user
                        }
                        else {
                            console.log('Email and password do not match')
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
        signIn: '/',
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user
            return session
        }
    }
};