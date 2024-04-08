import { connectToDB } from "@/utils/database";
import User from "@/models/users";
import bcrypt from 'bcrypt';

export const POST = async (req) => {
    const {name, username, email, password, phone} = await req.json();

    try {
        await connectToDB()

        const userEmail = await User.findOne({email: email});
        
        if (userEmail) {
            console.log("Email is taken")
            return new Response(JSON.stringify({message: 'Email is already taken'}), {status: 301})
        }

        const userName = await User.findOne({username: username})

        if (userName) {
            console.log('Username already taken')
            return new Response(JSON.stringify({message: 'Username aleady taken'}), {status: 301})
        }

        const saltRounds = 10;

        let hashed_password = await bcrypt.hash(password, saltRounds);

        const newUser = new User({email, username, hashed_password, name, phone});

        newUser.save()

        return new Response(JSON.stringify({message: 'Signup successful!'}), {status: 200});

    } catch (error) {
        console.log('Signup error:', error)
        return new Response(JSON.stringify(error), {status: 500})
    }
}