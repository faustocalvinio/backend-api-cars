import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.ENV_MONGODB_CONNECTION_STRING) throw new Error("no mongodb conn string")
        const conn = await mongoose.connect(process.env.ENV_MONGODB_CONNECTION_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;