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
      console.log(req.body)
      return res.json(car);
   } catch (error) {
      return res.json({ error });
   }
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
   try {
      console.log("Datos recibidos en req.body:", req.body);
      
      const carToUpdate = await Car.findById(req.params.id);
      
      if (!carToUpdate) {
         return res.status(404).json({ message: 'Coche no encontrado' });
      }

      carToUpdate.lastUpdate = Date.now();

      const updatedCar = await Car.findByIdAndUpdate(
         req.params.id,
         {
            ...req.body,
            lastUpdate: carToUpdate.lastUpdate
         },
         { new: true }
      );

      console.log("Coche actualizado:", updatedCar);

      return res.json({
         updatedCar
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
      carToUpdate.lastUpdate = Date.now()
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
