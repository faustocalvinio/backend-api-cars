const Car = require("../../models/Car.model");

async function seedCars(req, res) {
   try {
      // Datos de ejemplo para autos
      const carsData = [
         {
            name: "Carro 1",
            price: 20000,
            image: "url_imagen_1",
            year: 2020,
            description: "Descripción del carro 1",
            category: "sedan",
            brand: "Marca 1",
            kilometers: 50000,
         },
         {
            name: "Carro 2",
            price: 15000,
            image: "url_imagen_2",
            year: 2018,
            description: "Descripción del carro 2",
            category: "hatchback",
            brand: "Marca 2",
            kilometers: 60000,
         },
         // Agregar más ejemplos de carros aquí
         {
            name: "Carro 3",
            price: 25000,
            image: "url_imagen_3",
            year: 2019,
            description: "Descripción del carro 3",
            category: "SUV",
            brand: "Marca 3",
            kilometers: 30000,
         },
         {
            name: "Carro 4",
            price: 18000,
            image: "url_imagen_4",
            year: 2017,
            description: "Descripción del carro 4",
            category: "sedan",
            brand: "Marca 4",
            kilometers: 70000,
         },
         {
            name: "Carro 5",
            price: 30000,
            image: "url_imagen_5",
            year: 2021,
            description: "Descripción del carro 5",
            category: "hatchback",
            brand: "Marca 5",
            kilometers: 20000,
         },
         {
            name: "Carro 6",
            price: 22000,
            image: "url_imagen_6",
            year: 2018,
            description: "Descripción del carro 6",
            category: "SUV",
            brand: "Marca 6",
            kilometers: 40000,
         },
         {
            name: "Carro 7",
            price: 19000,
            image: "url_imagen_7",
            year: 2020,
            description: "Descripción del carro 7",
            category: "sedan",
            brand: "Marca 7",
            kilometers: 60000,
         },
         {
            name: "Carro 8",
            price: 28000,
            image: "url_imagen_8",
            year: 2019,
            description: "Descripción del carro 8",
            category: "hatchback",
            brand: "Marca 8",
            kilometers: 35000,
         },
         {
            name: "Carro 9",
            price: 21000,
            image: "url_imagen_9",
            year: 2018,
            description: "Descripción del carro 9",
            category: "SUV",
            brand: "Marca 9",
            kilometers: 50000,
         },
         {
            name: "Carro 10",
            price: 32000,
            image: "url_imagen_10",
            year: 2022,
            description: "Descripción del carro 10",
            category: "sedan",
            brand: "Marca 10",
            kilometers: 10000,
         },
      ];
      // const carsData = [
      //    {
      //       name: "Toyota Corolla",
      //       price: 20000,
      //       image: "https://example.com/toyota_corolla.jpg",
      //    },
      //    {
      //       name: "Honda Civic",
      //       price: 22000,
      //       image: "https://example.com/honda_civic.jpg",
      //    },
      //    {
      //       name: "Ford Mustang",
      //       price: 35000,
      //       image: "https://example.com/ford_mustang.jpg",
      //    },
      // ];

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

async function getAllCars(req, res) {
   const cars = await Car.find();
   return res.json(cars);
}

module.exports = { seedCars, getAllCars };
