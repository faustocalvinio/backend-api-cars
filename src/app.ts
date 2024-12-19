import { log2 } from "./test/lorem"
import dotenv from "dotenv";
import express from "express";
import router from "./router/car.router";
const log: string = "AAA"
dotenv.config()
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        ok: true
    })
})
app.use("/api/cars", router);
app.listen(process.env.ENV_PORT, () => {
    console.log(
        `Servidor corriendo en el puerto localhost:${process.env.ENV_PORT}`
     );
})
console.log(log)
console.log(log2)