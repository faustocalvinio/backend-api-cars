const express = require("express");
const router = express.Router();

const {
   deleteCar,
   getAllCars,
   createCar,
   updateCar,
   updateStock,
} = require("../controllers/cars/cars.controllers");
const { seedCars } = require("../helpers/seedCars");
const { validateJWT } = require("../middlewares/jwt/validateJWT");

router.get("/all", [], getAllCars);

router.delete("/delete/:id", validateJWT, deleteCar);
router.put("/add", validateJWT, createCar);
router.patch("/update/:id", validateJWT, updateCar);
router.post("/seed", validateJWT, seedCars);
router.post("/update/stock/:id", validateJWT, updateStock);

module.exports = router;
