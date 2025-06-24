import connectDB from "../database/dbConn";
import { SeedCar } from "../interfaces/car.interfaces";
import { Admin } from "../models/Admin.model";
import { Car } from "../models/Car.model";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const carsDataSeed: SeedCar[] = [
   {
      model: "Q3",
      type: "Sedan",
      brand: "AUDI",
      fuelType: "Electric",
      price: "79999",
      stock: 10,
      image: "/ix.webp",
      portraitImage: "/cars-portrait/AUDI-Q3-PORTADA.jpg",
   },
   {
      model: "R8",
      type: "Sedan",
      brand: "AUDI",
      fuelType: "Electric",
      price: (Math.floor(Math.random() * (180000 - 120000 + 1)) + 120000).toString(),
      stock: 10,
      image: "/ix.webp",
      portraitImage: "/cars-portrait/AUDI-R8-PORTADA.jpg",
   },
   {
      model: "M3",
      type: "Sedan",
      brand: "BMW",
      fuelType: "Electric",
      price: (Math.floor(Math.random() * (90000 - 70000 + 1)) + 70000).toString(),
      stock: 10,
      image: "/ix.webp",
      portraitImage: "/cars-portrait/M3-PORTADA.jpg",
   },
   {
      model: "Gran Turismo",
      type: "Sedan",
      brand: "MASERATI",
      fuelType: "Electric",
      price: (Math.floor(Math.random() * (160000 - 110000 + 1)) + 110000).toString(),
      stock: 10,
      image: "/ix.webp",
      portraitImage: "/cars-portrait/MASERATI-PORTADA.jpg",
   },
   {
      model: "Corsa",
      type: "Sedan",
      brand: "OPEL",
      fuelType: "Electric",
      price: (Math.floor(Math.random() * (35000 - 20000 + 1)) + 20000).toString(),
      stock: 10,
      image: "/ix.webp",
      portraitImage: "/cars-portrait/OPEL-CORSA-PORTADA.jpg",
   },
   {
      model: "718 Cayman",
      type: "Sedan",
      brand: "PORSCHE",
      fuelType: "Electric",
      price: (Math.floor(Math.random() * (110000 - 80000 + 1)) + 80000).toString(),
      stock: 10,
      image: "/ix.webp",
      portraitImage: "/cars-portrait/PORSCHE-718-CAIMAN-PORTADA.jpg",
   },
];

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
      process.exit(0);
   }
}
main();
