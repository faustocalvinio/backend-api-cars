import { NextFunction, Request, Response } from "express";
import { Car } from "../models/Car.model";
import { carsDataSeed } from "../utils/carsDataSeed";
import connectDB from "../database/dbConn";


export const seedCars = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await connectDB();
        await Car.deleteMany();
        const createdCars = await Car.create(carsDataSeed);

        res.status(200).json({ ok: true, message: "Cars seeded successfully" });
    } catch (error) {
        next(error);
    }
};
