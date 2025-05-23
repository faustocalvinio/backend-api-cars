import connectDB from "../database/dbConn";
import { SeedCar } from "../interfaces/car.interfaces";
import { Admin } from "../models/Admin.model";
import { Car } from "../models/Car.model";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const carsDataSeed: SeedCar[] = [
   {
      model: "BMW iX",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "87350",
      stock: 21,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "AUDI RS5",
      type: "AUDI RS",
      fuelType: "HIBRIDO",
      price: "98765",
      stock: 220,
      image: "/ix.webp",
      sales: 20,
   },
   {
      model: "BMW iX M60",
      type: "BMW M",
      fuelType: "ELECTRICO",
      price: "140600",
      stock: 40,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW i7",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "115700",

      stock: 5,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW i7 M70 xDrive",
      type: "BMW M",
      fuelType: "ELECTRICO",
      price: "186650",

      stock: 10,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW i5 Touring",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "79550",

      stock: 50,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW i5 M60 xDrive Touring",
      type: "BMW M",
      fuelType: "ELECTRICO",
      price: "117050",

      stock: 22,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW i5 Berlina",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "76950",

      stock: 8,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW i5 M60 xDrive Berlina",
      type: "BMW M",
      fuelType: "ELECTRICO",
      price: "114450",

      stock: 0,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "Nuevo BMW i4",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "58600",

      stock: 44,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW iX3",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "74600",
      stock: 76,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW iX2",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "58200",

      stock: 70,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW iX1",
      type: "BMW i",
      fuelType: "ELECTRICO",
      price: "49100",
      stock: 40,
      image: "/ix.webp",
      sales: 33,
   },
   {
      model: "BMW XM",
      type: "BMW M",
      fuelType: "HIBRIDO ENCHUFABLE",
      price: "201700",

      stock: 5,
      image: "/ix.webp",
      sales: 33,
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
