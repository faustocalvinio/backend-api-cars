const express = require("express");

const cors = require("cors");

const { dbConnection } = require("./database/db-config");

const dotenv = require("dotenv");
const { seedCarsFn } = require("./helpers/seedCarsFn.js");
const { generateJWT } = require("./helpers/generateJWT.js");
const { validateJWT } = require("./middlewares/jwt/validateJWT.js");

dotenv.config();

dbConnection();

const app = express();

app.use(express.static("public"));

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes.js"));
app.use("/api/cars", require("./routes/cars.routes.js"));
app.get("/api/seed", seedCarsFn);
app.get("/api/jwt", async (req, res) => {
   const jwt = await generateJWT("656365583", "Seed JWT");

   res.json({
      ok: true,
      msg: "JWT ok",
      jwt,
   });
});
app.get("/api/test", (req, res) => {
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

app.get("/api/validar", validateJWT);

app.listen(process.env.ENV_PORT, () => {
   console.log(
      `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
   );
});
