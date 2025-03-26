import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = (
   req: Request,
   res: Response,
   next: NextFunction
): void => {
   const token = req.header("x-token");
   if (!token) {
      res.status(401).json({
         ok: false,
         message: "No hay token en los headers de la peticion",
      });
   }
   try {
      jwt.verify(token!, process.env.ENV_JWT_SECRET_PRIVATE_KEY || "");
   } catch (error) {
      res.status(401).json({
         ok: false,
         message: "El token no es valido",
      });
   }
   next();
};
