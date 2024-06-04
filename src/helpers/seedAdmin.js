const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin.model");

const seedAdmins = async (req, res) => {
   const admins = [
      {
         name: "Admin",
         email: "admin1@test.com",
         password: await bcrypt.hash("123456", 10),
      },
      {
         name: "Admin Dos",
         email: "admin2@test.com",
         password: await bcrypt.hash("123456", 10),
      },
   ];
   try {
      await Admin.insertMany(admins);
      console.log("Seed Admins ejecutado");
      return res.json({
         ok: true,
         msg: "Admins añadidos correctamente",
      });
   } catch (err) {
      console.error("Error al añadir administradores:", err);
   }
};

module.exports = { seedAdmins };
