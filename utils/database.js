import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectDB = async () => {

    console.log("hello from mongodb connection...");
    
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('Mongodb is already connected...');
        return;
    } 
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;

        console.log("mongodb connected");
        
    } catch (error) {
        console.log(error);
        
    }
}