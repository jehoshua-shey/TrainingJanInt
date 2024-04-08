import mongoose from "mongoose";

let isConnected = false; // track database connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // To avoid errors in our 
    
    if (isConnected) {
        console.log('MongoDB is already connected!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'integral',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('mongoDB is connected')

    } catch (error) {
        console.log('Database Connection Error:', error)
    }
}