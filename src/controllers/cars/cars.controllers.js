const Car = require("../../models/Car.model");

async function getAllCars(req, res) {
   const cars = await Car.find();
   return res.json(cars);
}
async function createCar(req, res) {
   const car = await Car.create(req.body);
   return res.json(car);
}

async function deleteCar(req, res) {
   const carToRemove = await Car.findById(req.params.id);
   const resp = await Car.deleteMany(carToRemove);

   return res.json({
      carToRemove,
      resp,
   });
}

async function updateCar(req, res) {
   const carToUpdate = await Car.findById(req.params.id);
   const resp = await Car.updateMany(carToUpdate, req.body);

   return res.json({
      carToUpdate,
      resp,
   });
}

async function updateStock(req, res) {
   try {
      const carToUpdate = await Car.findById(req.params.id);
      if (!carToUpdate) {
         return res.status(404).json({ message: "Car not found" });
      }
      const target = Number(req.query.amount);
      carToUpdate.stock = target;
      const updatedCar = await carToUpdate.save();
      return res.json({
         updatedCar,
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
