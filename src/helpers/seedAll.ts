import connectDB from "../database/dbConn";
import { Admin } from "../models/Admin.model";
import { Car } from "../models/Car.model";
import { carsDataSeed } from "../utils/carsDataSeed";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

async function main() {
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
         password: 123456,
      });
      const salt = bcryptjs.genSaltSync();
      admin.password = bcryptjs.hashSync("123456", salt);

      await admin.save();
      console.log(`seeded ${admin}`);
      await Car.deleteMany();
      const createdCars = await Car.create(carsDataSeed);
      console.log(createdCars);
   } catch (error) {
      console.error(error);
   } finally {
      console.log("Cerrando conexión a la base de datos...");
      process.exit(0); // Fuerza la salida del proceso
   }
}
main();
