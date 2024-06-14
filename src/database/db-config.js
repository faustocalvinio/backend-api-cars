const mongoose = require("mongoose");

const dbConnection = async () => {
   try {
      await mongoose.connect(process.env.ENV_MONGODB_CONNECTION_STRING);
      console.log("Base de datos en linea");
   } catch (error) {
      throw new Error(
         `Error al iniciar la base de datos ${process.env.ENV_MONGODB_CONNECTION_STRING}`
      );
   }
};

module.exports = { dbConnection };
