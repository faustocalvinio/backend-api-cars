const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/jwt/validateJWT");
const {
   createAdmin,
   loginUser,
} = require("../controllers/admin/admin.controllers");
const { validateFields } = require("../middlewares/auth/validateFields");
const { seedAdmins } = require("../helpers/seedAdmin");

router.post("/seed-admins", [], seedAdmins);

router.post(
   "/new-admin",
   [
      check("name", "El nombre es obligatorio").not().isEmpty(),
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe ser de 6 caracteres").isLength({
         min: 6,
      }),
      validateFields,
   ],
   createAdmin
);

router.post(
   "/",
   [
      check("email", "El email es obligatorio").isEmail(),
      check("password", "El password debe ser de 6 caracteres").isLength({
         min: 6,
      }),
      validateFields,
   ],
   loginUser
);

// router.get("/renew", validateJWT, renewToken);

module.exports = router;
