const Car = require("../models/Car.model");
const { carsDataSeed } = require("../utils/carsDataSeed");

async function seedCars(req, res) {
   try {
      await Car.deleteMany();
      const createdCars = await Car.create(carsDataSeed);
      return res.json({
         ok: true,
         message: `Created ${createdCars.length} seed cars`,
      });
   } catch (error) {
      console.error("Error al ejecutar el seed", error);
   }
}

module.exports = { seedCars };
