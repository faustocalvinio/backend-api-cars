import dotenv from "dotenv";
import express from "express";
import carRouter from "./router/car.router";
import authRouter from "./router/auth.router";
import connectDB from "./database/dbConn";

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
   res.json({
      ok: true,
      message: "Testing root API",
   });
});

app.use("/api/cars", carRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.ENV_PORT || 3000, () => {
   console.log(
      `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
   );
});
