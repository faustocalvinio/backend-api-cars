const express = require("express");

const cors = require("cors");

const { dbConnection } = require("./database/db-config");

const dotenv = require("dotenv");

dotenv.config();

dbConnection();

const app = express();

app.use(express.static("public"));

app.use(cors());

app.use(express.json());

// app.use("/api/auth", require("./routes/auth.routes.js"));
// app.use("/api/cars", require("./routes/cars.auth.routes.js"));

app.get("*", (req, res) => {
   res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.ENV_PORT, () => {
   console.log(
      `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
   );
});
