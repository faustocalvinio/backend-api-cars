import { Router } from "express";
import {
    deleteCar,
    getAllCars,
    createCar,
    updateCar,
    updateStock,
} from "../controllers/car.controllers";
import { seedCars } from "../helpers/seedCars";
import { validateJWT } from "../middlewares/validateJWT";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields";

const carRouter = Router();

carRouter.get("/all", [], getAllCars);
carRouter.post("/seed", validateJWT, seedCars);

carRouter.delete("/delete/:id", validateJWT, deleteCar);
carRouter.put(
    "/add",
    [
        validateJWT,
        check("model", "Model is required").not().isEmpty(),
        check("type", "Type is required").not().isEmpty(),
        check("fuelType", "Fuel type is required").not().isEmpty(),
        check("price", "Price must be a number").optional().isNumeric(),
        validateFields,
    ],
    createCar
);
carRouter.patch("/update/:id", validateJWT, updateCar);
carRouter.post("/update/stock/:id", validateJWT, updateStock);

export default carRouter;
