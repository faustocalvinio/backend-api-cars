import { Request, Response } from "express";
import { Car } from "../models/Car.model";

export const getAllCars = async (req: Request, res: Response): Promise<void> => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.json({ error });
    }
};

// export const createCar = async (req: Request, res: Response): Promise<Response> => {
//     try {
//         const car = await Car.create(req.body);
//         console.log(req.body);
//         return res.json({
//             ok: true,
//             message: "Car created successfully",
//             newCar: car.model,
//         });
//     } catch (error) {
//         return res.json({ error });
//     }
// };
export const createCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const { model, type, fuelType, price, stock, image } = req.body;

        // Validación adicional del servidor (opcional)
        if (!model || !type || !fuelType) {
            res.status(400).json({
                ok: false,
                message: "Model, type, and fuelType are required",
            });
        }

        // Crear el auto en la base de datos
        const car = await Car.create({ model, type, fuelType, price, stock, image });

        res.status(201).json({
            ok: true,
            message: "Car created successfully",
            newCar: car,
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            ok: false,
            message: "An error occurred while creating the car",
            error: error.message,
        });
    }
};
export const deleteCar = async (req: any, res: any) => {
    const carsList = await Car.find();
    console.log(carsList)
    try {
        const carToRemove = await Car.findById(req.params.id);
        if (!carToRemove) {
            return res.status(404).json({ message: "Car not found" });
        }
        await Car.deleteMany({ _id: carToRemove._id });
        return res.json({
            ok: true,
            model: carToRemove.model,
            message: "Deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
};

export const updateCar = async (req: Request, res: Response): Promise<void> => {
    try {
        const carToUpdate = await Car.findById(req.params.id);
        if (!carToUpdate) {
            res.status(404).json({ message: "Car not found" });
        }

        carToUpdate!.lastUpdate = Date.now();

        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                lastUpdate: carToUpdate!.lastUpdate,
            },
            { new: true }
        );

        res.json({
            ok: true,
            message: "Updated car",
            model: updatedCar?.model,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const updateStock = async (req: Request, res: Response): Promise<void> => {
    try {
        const carToUpdate = await Car.findById(req.params.id);
        if (!carToUpdate) {
            res.status(404).json({ message: "Car not found" });
        }
        const target = Number(req.query.amount);
        carToUpdate!.stock = target;
        carToUpdate!.lastUpdate = Date.now();
        const updatedCar = await carToUpdate!.save();
        res.json({
            ok: true,
            model: updatedCar.model,
            newStock: updatedCar.stock,
            message: "Stock updated successfully",
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};