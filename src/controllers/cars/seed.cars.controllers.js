const Car = require("../../models/Car.model");

async function seedCars(req, res) {
   try {
      // Datos de ejemplo para autos
      const carsData = [
         {
            name: "Toyota Corolla",
            price: 20000,
            image: "https://example.com/toyota_corolla.jpg",
         },
         {
            name: "Honda Civic",
            price: 22000,
            image: "https://example.com/honda_civic.jpg",
         },
         {
            name: "Ford Mustang",
            price: 35000,
            image: "https://example.com/ford_mustang.jpg",
         },
      ];

      // Eliminar todos los autos existentes (opcional)
      await Car.deleteMany();

      // Crear autos de ejemplo
      const createdCars = await Car.create(carsData);

      console.log("Datos de ejemplo de autos creados con éxito:", createdCars);
      return res.json({ ok: true });
   } catch (error) {
      console.error("Error al sembrar datos de ejemplo:", error);
   }
}

async function getAllCars (req,res){
    const cars = await Car.find();
    return res.json(cars);
}


module.exports = { seedCars, getAllCars };
