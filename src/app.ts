import dotenv from "dotenv";
import express from "express";
import carRouter from "./router/car.router";
import authRouter from "./router/auth.router";

dotenv.config()
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        ok: true
    })
})

app.use("/api/cars", carRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.ENV_PORT, () => {
    console.log(
        `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
    );
})