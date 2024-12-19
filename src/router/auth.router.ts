// import { Router } from "express";
// import { check } from "express-validator";
// import { validateJWT } from "../middlewares/validateJWT";
// import { seedAdmins } from "../helpers/seedAdmin";
// import {
//     createAdmin,
//     loginUser,
//     renewToken,
// } from "../controllers/auth.controllers";
// import { validateFields } from "../middlewares/validateFields";

// const router = Router();

// // Ruta para sembrar administradores
// router.post("/seed", [], seedAdmins);

// // Ruta para crear un nuevo administrador
// router.post(
//     "/new-admin",
//     [
//         check("name", "The name is required.").not().isEmpty(),
//         check("email", "The email is required.").isEmail(),
//         check("password", "The password must be 6 characters long.").isLength({
//             min: 6,
//         }),
//         validateFields,
//     ],
//     createAdmin
// );

// // Ruta para login de administrador
// router.post(
//     "/login",
//     [
//         check("email", "The email is required.").isEmail(),
//         check("password", "The password must be 6 characters long.").isLength({
//             min: 6,
//         }),
//         validateFields,
//     ],
//     loginUser
// );

// // Ruta para renovar token
// router.get("/renew", validateJWT, renewToken);

// export default router;
