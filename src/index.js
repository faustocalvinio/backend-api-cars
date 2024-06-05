const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const { dbConnection } = require("./database/db-config");
const { seedCarsFn } = require("./helpers/seedCarsFn.js");
const { generateJWT } = require("./helpers/generateJWT.js");
const { validateJWT } = require("./middlewares/jwt/validateJWT.js");

// !CONFIGURAR EL PAQUETE DOTENV
dotenv.config();
// !REALIZAR LA CONEXION A LA BASE DE DATOS
dbConnection();
// !DEFINIENDO LA APLICACION DE EXPRESS.JS
const app = express();
// !
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
// !USAR EL PAQUETE CORS
app.use(cors());
// !ESTO FUNCIONA PARA PODER RECIBIR JSON EN EL BODY DE LAS REQUESTS
app.use(express.json());
// !USAR LOS ARCHIVOS .routes.js
app.use("/api/auth", require("./routes/auth.routes.js"));
app.use("/api/cars", require("./routes/cars.routes.js"));

// !ALGUNAS FUNCIONES DE EJEMPLO
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/public', 'index.html'));
 });

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
