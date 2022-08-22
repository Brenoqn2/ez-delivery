import { Router } from "express";
import ordersController from "../controllers/ordersController.js";
import validateSchema from "../middlewares/validateSchema.js";
import validateToken from "../middlewares/validateToken.js";
import ordersSchema from "../schemas/ordersSchema.js";

const ordersRouter = Router();
ordersRouter.post(
  "/",
  validateSchema(ordersSchema.register),
  validateToken,
  ordersController.register
);
ordersRouter.get("", validateToken, ordersController.getEstablishmentOrders);

export default ordersRouter;
