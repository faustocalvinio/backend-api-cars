const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/jwt/validateJWT");
const { seedAdmins } = require("../helpers/seedAdmin");
const {
   createAdmin,
   loginUser,
   renewToken,
} = require("../controllers/admin/admin.controllers");
const { validateFields } = require("../middlewares/auth/validateFields");

router.post("/seed", [], seedAdmins);

router.post(
   "/new-admin",
   [
      check("name", "The name is required.").not().isEmpty(),
      check("email", "The email is required.").isEmail(),
      check("password", "The password must be 6 characters long.").isLength({
         min: 6,
      }),
      validateFields,
   ],
   createAdmin
);

router.post(
   "/login",
   [
      check("email", "The email is required.").isEmail(),
      check("password", "The password must be 6 characters long.").isLength({
         min: 6,
      }),
      validateFields,
   ],
   loginUser
);

router.get("/renew", validateJWT, renewToken);

module.exports = router;
