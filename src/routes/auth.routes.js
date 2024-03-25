const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// !const { validateFields } = require("../middlewares/validate-fields");

const { validateJWT } = require("../middlewares/jwt/validateJWT");

const { createAdmin } = require("../controllers/admin/admin.controllers");
const { validateFields } = require("../helpers/validateFields");

validateJWT;

router.post(
   "/new-admin",
   [
      check("name", "El nombre es obligatorio").not().isEmpty(),
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe ser de 6 caracteres").isLength({
         min: 6,
      }),
      validateFields
   ],
   createAdmin
);


// validateFields,
// router.post(
//    "/",
//    [
//       check("email", "El email es obligatorio").isEmail(),
//       check("password", "El password debe ser de 6 caracteres").isLength({
//          min: 6,
//       }),
//       validateFields,
//    ],
//    loginUser
// );

// router.get("/renew", validateJWT, renewToken);

module.exports = router;
