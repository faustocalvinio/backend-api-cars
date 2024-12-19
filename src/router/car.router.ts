import { Request, RequestHandler, Router } from "express";
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

const router = Router();

// Definición de rutas con sus controladores y middlewares
// router.get("/all", [], getAllCars);
router.post("/seed", validateJWT, seedCars);

// router.delete("/delete/:id", validateJWT, deleteCar);
// router.put(
//     "/add",
//     [
//       validateJWT,
//       check("model", "Model is required").not().isEmpty(),
//       check("type", "Type is required").not().isEmpty(),
//       check("fuelType", "Fuel type is required").not().isEmpty(),
//       check("price", "Price must be a number").optional().isNumeric(),
//       validateFields,
//     ],
//     createCar
//   );
// router.patch("/update/:id", validateJWT, updateCar);
// router.post("/update/stock/:id", validateJWT, updateStock);

export default router;
