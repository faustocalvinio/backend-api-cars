const Car = require("../models/Car.model");
const { carsDataSeed } = require("../utils/carsDataSeed");

async function seedCars(req, res) {
   try {
      await Car.deleteMany();
      const createdCars = await Car.create(carsDataSeed);
      console.log(
         `Cree con exito la cantidad de ${createdCars.length} autos seed`
      );
      return res.json({ ok: true });
   } catch (error) {
      console.error("Error al ejecutar el seed", error);
   }
}

module.exports = { seedCars };
