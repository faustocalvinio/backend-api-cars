import { Request, Response } from "express";
import { Car } from "../models/Car.model";
import { carsDataSeed } from "../utils/carsDataSeed";
import connectDB from "../database/dbConn";
import dotenv from "dotenv"
dotenv.config()
export const seedCars = async (
    req?: Request,
    res?: Response,

): Promise<void> => {
    try {
        await connectDB();
        await Car.deleteMany();
        const createdCars = await Car.create(carsDataSeed);
        console.log(createdCars)
        // res.status(200).json({ ok: true, message: "Cars seeded successfully" });
    } catch (error) {
        console.error(error);

        // next();
    }
};



seedCars();