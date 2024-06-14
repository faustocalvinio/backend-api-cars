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

module.exports = {
   getAllCars,
   createCar,
   deleteCar,
   updateCar,
};
