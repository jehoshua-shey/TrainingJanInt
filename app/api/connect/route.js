import { connectToDB } from "@/utils/database";

export const GET = async () => {
    try {
        await connectToDB()
    } catch (error) {
        console.log('Connection Error:', error)        
    }
}