const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
   // leer los headers de la request
   const token = req.header("x-token");

   if (!token) {
      return res.status(401).json({
         ok: false,
         msg: "No hay token en los headers de la peticion",
      });
   }
   try {
      const { uid, name } = jwt.verify(
         token,
         process.env.ENV_JWT_SECRET_PRIVATE_KEY
      );
      req.uid = uid;
      req.name = name;
   } catch (error) {
      return res.status(401).json({
         ok: false,
         msg: "El token no es valido",
      });
   }
   next();
};

module.exports = {
   validateJWT,
};
