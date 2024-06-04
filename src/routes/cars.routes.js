const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
   deleteCar,
   getAllCars,
   createCar,
} = require("../controllers/cars/cars.controllers");

router.put("/add", [], createCar);
router.get("/all", [], getAllCars);
router.delete("/delete/:id", [], deleteCar);

module.exports = router;
