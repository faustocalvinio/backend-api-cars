import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { Admin } from "../models/Admin.model";
import { generateJWT } from "../helpers/generateJWT";
import { ReqWithToken } from "../interfaces/car.interfaces";

export const createAdmin = async (
   req: Request,
   res: Response
): Promise<void> => {
   const { email, password } = req.body;

   try {
      let admin = await Admin.findOne({ email });
      if (admin) {
         res.status(400).json({
            ok: false,
            message: "Email already registered",
         });
         return;
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

export const loginUser = async (req: Request, res: Response): Promise<void> => {
   const { email, password } = req.body;
   console.log({ email, password, method: "LOGIN" });
   try {
      const user = await Admin.findOne({ email });
      if (!user) {
         res.status(400).json({
            ok: false,
            message: "User not found",
         });
         return;
      }

      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
         res.status(400).json({
            ok: false,
            message: "Wrong password",
         });
         return;
      }

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

export const renewToken = async (
   req: ReqWithToken,
   res: Response
): Promise<void> => {
   const { uid, name } = req;
   const token = await generateJWT(uid!, name!);

   res.status(201).json({
      ok: true,
      uid,
      name,
      token,
   });
};
