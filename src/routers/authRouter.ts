import { Router } from "express";
import authController from "../controllers/authController.js";
import validateSchema from "../middlewares/validateSchema.js";
import authSchema from "../schemas/authSchema.js";

const authRouter = Router();
authRouter.post(
  "/sign-up",
  validateSchema(authSchema.registerSchema),
  authController.register
);

authRouter.post(
  "/sign-in",
  validateSchema(authSchema.loginSchema),
  authController.login
);

export default authRouter;
