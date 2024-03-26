const express = require("express");

const cors = require("cors");

const { dbConnection } = require("./database/db-config");

const dotenv = require("dotenv");
const { seedCars } = require("./controllers/cars/seed.cars.controllers.js");

dotenv.config();

dbConnection();

const app = express();

app.use(express.static("public"));

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes.js"));
app.use("/api/cars", require("./routes/cars.routes.js"));

// app.get("/api/seed", async () => await seedCars());

app.get("/test", (req, res) => {
   // Obtener la hora actual
   let ahora = new Date();

   let horas = ahora.getHours();
   let minutos = ahora.getMinutes();
   let segundos = ahora.getSeconds();

   minutos = minutos < 10 ? "0" + minutos : minutos;
   segundos = segundos < 10 ? "0" + segundos : segundos;

   let horaFormateada = `${horas}:${minutos}:${segundos}`;

   res.json({
      ok: true,
      msg: `Todo funciona bien a las ${horaFormateada}`,
   });
});

app.get("*", (req, res) => {
   res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.ENV_PORT, () => {
   console.log(
      `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
   );
});
