const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Admin = require("../../models/Admin.model");
const { generateJWT } = require("../../helpers/generateJWT");

const createAdmin = async (req, res = response) => {
   const { email, password } = req.body;

   try {
      let admin = await Admin.findOne({ email });
      if (admin) {
         return res.status(400).json({
            ok: false,
            message: "Email already registered",
         });
      }

      admin = new Admin(req.body);
      const salt = bcryptjs.genSaltSync();
      admin.password = bcryptjs.hashSync(password, salt);

      await admin.save();

      res.status(201).json({
         ok: true,
         uid: admin.id,
         name: admin.name,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         ok: false,
         message: "Unexpected error",
      });
   }
};

const loginUser = async (req, res = response) => {
   const { email, password } = req.body;

   try {
      const user = await Admin.findOne({ email });

      if (!user) {
         return res.status(400).json({
            ok: false,
            message: "User not found",
         });
      }

      const validPassword = bcryptjs.compareSync(password, user.password);

      if (!validPassword) {
         return res.status(400).json({
            ok: false,
            message: "Wrong password",
         });
      }
      // ?GENERAR TOKEN DE AUTH
      const token = await generateJWT(user.id, user.name);

      res.status(200).json({
         ok: true,
         uid: user.id,
         name: user.name,
         token,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         ok: false,
         message: "Unexpected error",
      });
   }
};

const renewToken = async (req, res = response) => {
   const { uid, name } = req;
   const token = await generateJWT(uid, name);

   res.status(201).json({
      ok: true,
      uid,
      name,
      token,
   });
};

module.exports = {
   createAdmin,
   loginUser,
   renewToken,
};
