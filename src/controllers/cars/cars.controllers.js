const Car = require("../../models/Car.model");

async function getAllCars(req, res) {
   try {
      const cars = await Car.find();
      return res.json(cars);
   } catch (error) {
      return res.json({ error });
   }
}
async function createCar(req, res) {
   try {
      const car = await Car.create(req.body);
      console.log(req.body);
      return res.json({
         ok: true,
         message: "Car created succesfully",
         newCar: car.model,
      });
   } catch (error) {
      return res.json({ error });
   }
}

async function deleteCar(req, res) {
   try {
      const carToRemove = await Car.findById(req.params.id);
      const resp = await Car.deleteMany(carToRemove);
      return res.json({
         ok: true,
         model: carToRemove.model,
         message: "Deleted Succesfully",
      });
   } catch (error) {
      return res.json({ error });
   }
}

async function updateCar(req, res) {
   try {
      const carToUpdate = await Car.findById(req.params.id);

      if (!carToUpdate) {
         return res.status(404).json({ message: "Coche no encontrado" });
      }

      carToUpdate.lastUpdate = Date.now();

      const updatedCar = await Car.findByIdAndUpdate(
         req.params.id,
         {
            ...req.body,
            lastUpdate: carToUpdate.lastUpdate,
         },
         { new: true }
      );

      return res.json({
         ok: true,
         message: "Updated car",
         model: updatedCar.model,
      });
   } catch (error) {
      return res.status(500).json({ error });
   }
}

async function updateStock(req, res) {
   try {
      const carToUpdate = await Car.findById(req.params.id);
      if (!carToUpdate) {
         return res.status(404).json({ message: "Car not found" });
      }
      const target = Number(req.query.amount);
      carToUpdate.stock = target;
      carToUpdate.lastUpdate = Date.now();
      const updatedCar = await carToUpdate.save();
      return res.json({
         ok: true,
         model: updatedCar.model,
         newStock: updatedCar.stock,
         message: "Stock updated successfully",
      });
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
}

module.exports = {
   getAllCars,
   createCar,
   deleteCar,
   updateCar,
   updateStock,
};
