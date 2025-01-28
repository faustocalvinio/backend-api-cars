import dotenv from "dotenv";
import { Admin } from "../models/Admin.model";
import connectDB from "../database/dbConn";
import bcryptjs from "bcryptjs"
dotenv.config()
export const seedAdmins = async () => {
    try {
        await connectDB();
        await Admin.deleteMany();
        let admin = await Admin.findOne({ email: "admin1@test.com" });
        if (admin) {

            return false;
        }
        admin = new Admin({
            name: "John doe",
            email: "admin1@test.com",
            password: 123456
        });
        const salt = bcryptjs.genSaltSync();
        admin.password = bcryptjs.hashSync("123456", salt);

        await admin.save();

    } catch (error) {
        console.error(error);
    }
}


seedAdmins();