const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { seedCars, getAllCars } = require("../controllers/cars/seed.cars.controllers");

router.post("/seed", [], seedCars);
router.get("/all", [], getAllCars);
module.exports = router;