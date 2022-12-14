import { Router } from "express";
import deliverersController from "../controllers/deliverersController.js";
import validateSchema from "../middlewares/validateSchema.js";
import deliverersSchema from "../schemas/deliverersSchema.js";
import validateToken from "../middlewares/validateToken.js";

const deliverersRouter = Router();
deliverersRouter.post(
  "",
  validateSchema(deliverersSchema.registerSchema),
  validateToken,
  deliverersController.registerDeliverer
);
deliverersRouter.get(
  "",
  validateToken,
  deliverersController.getAvailableDeliverers
);
deliverersRouter.put(
  "",
  validateToken,
  deliverersController.setDelivererNotAvailable
);

export default deliverersRouter;
