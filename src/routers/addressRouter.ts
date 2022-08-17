import { Router } from "express";
import addressController from "../controllers/addressController.js";
import validateSchema from "../middlewares/validateSchema.js";
import addressSchema from "../schemas/addressSchema.js";
import validateToken from "../middlewares/validateToken.js";

const addressRouter = Router();
addressRouter.post(
  "",
  validateSchema(addressSchema.registerSchema),
  validateToken,
  addressController.registerAddress
);
addressRouter.get("", validateToken, addressController.getAddress);

export default addressRouter;
