const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
   deleteCar,
   getAllCars,
   createCar,
} = require("../controllers/cars/cars.controllers");

router.delete("/delete/:id", [], deleteCar);
router.get("/all", [], getAllCars);
router.put("/add", [], createCar);

module.exports = router;
