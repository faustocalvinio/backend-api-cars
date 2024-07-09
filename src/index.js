const path = require("path");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { dbConnection } = require("./database/db-config");

dotenv.config();
dbConnection();
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes.js"));
app.use("/api/cars", require("./routes/cars.routes.js"));

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.get("/api/test", (req, res) => {
   res.json({
      ok: true,
      message: "La API funciona bien",
   });
});

app.listen(process.env.ENV_PORT, () => {
   console.log(
      `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
   );
});
